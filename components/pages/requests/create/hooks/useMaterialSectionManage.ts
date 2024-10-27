import { RequestMaterialsDto } from "@/models/Requests/Requests";
import {
  EnumEndpoints,
  getEconomicProposalByProjectId,
} from "@/services/utils/utils-service";
import { Dispatch, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";

interface UseMaterialsProps {
  form: UseFormReturn<any, any>;
  projectId: number;
  setMaterials: Dispatch<React.SetStateAction<RequestMaterialsDto[]>>;
}

export const useMaterialSectionManage = ({
  form,
  projectId,
  setMaterials,
}: UseMaterialsProps) => {
  const {
    data: materialsData,
    isLoading: isLoadingMaterials,
    error: errorMaterials,
  } = useSWR(
    [EnumEndpoints.GetEconomicProposalByProjectId, projectId],
    () => getEconomicProposalByProjectId(projectId),
    { shouldRetryOnError: false }
  );

  const handleAddMaterials = useCallback(
    (data: RequestMaterialsDto, isCreated: boolean) => {
      const quantity = isCreated
        ? data.quantity
        : parseFloat(form.watch(`quantity-${data.id}`));

      setMaterials((prevData) => {
        const existingMaterial = prevData.find(
          (material) => material.id === data.id
        );

        if (existingMaterial) {
          return prevData.map((material) =>
            material.id === data.id
              ? {
                  ...material,
                  quantity: material.quantity + quantity,
                }
              : material
          );
        } else {
          return [
            ...prevData,
            {
              id: data.id,
              name: data.name,
              quantity: quantity,
              unitAmount: data.unitAmount,
              unitMeasure: data.unitMeasure,
            },
          ];
        }
      });

      form.resetField(`quantity-${data.id}`);
    },
    [form, setMaterials]
  );

  return {
    materialsData,
    isLoadingMaterials,
    errorMaterials,
    handleAddMaterials,
  };
};
