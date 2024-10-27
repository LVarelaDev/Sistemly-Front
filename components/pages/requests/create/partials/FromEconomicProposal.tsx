import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import InputText from "@/components/ui/Inputs/InputText";
import { RequestMaterialsDto } from "@/models/Requests/Requests";
import { Button } from "@nextui-org/button";
import React, { Dispatch } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  materialsData: RequestMaterialsDto[];
  isLoadingMaterials: boolean;
  errorMaterials: string;
  form: UseFormReturn<any, any>;
  handleAddMaterials: (item: RequestMaterialsDto, isCreated: boolean) => void;
}

const FromEconomicProposal = ({
  form,
  materialsData,
  isLoadingMaterials,
  errorMaterials,
  handleAddMaterials,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end items-center">
        <InputSearch
          form={form}
          name="searchMaterial"
          placeholder="Busca un material"
        />
      </div>
      <BaseFetchContainer
        data={materialsData}
        isLoading={isLoadingMaterials}
        error={errorMaterials}
      >
        <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scroll px-1">
          {materialsData &&
            materialsData.map((item) => {
              const quantityValue = parseFloat(
                form.watch(`quantity-${item.id}`, {
                  defaultValue: undefined,
                })
              );

              return (
                <div
                  key={item.id}
                  className="flex rounded-xl gap-3 items-center justify-between"
                >
                  <div className="flex flex-col flex-1">
                    <p className="flex-1 font-bold">{item.name}</p>
                    <p className="text-xs text-gray-700">
                      Cantidad actual: {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <InputText
                      type="number"
                      form={form}
                      label="Cantidad"
                      name={`quantity-${item.id}`}
                    />
                    <Button
                      onClick={() => handleAddMaterials(item, false)}
                      color="primary"
                      isDisabled={
                        quantityValue === 0 ||
                        quantityValue === undefined ||
                        Number.isNaN(quantityValue)
                      }
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </BaseFetchContainer>
    </div>
  );
};

export default FromEconomicProposal;
