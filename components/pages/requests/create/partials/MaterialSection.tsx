"use client";
import { RequestMaterialsDto } from "@/models/Requests/Requests";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React, { Dispatch } from "react";
import { UseFormReturn } from "react-hook-form";
import { useMaterialSectionManage } from "../hooks/useMaterialSectionManage";
import FormMaterials from "./FormMaterials";
import FromEconomicProposal from "./FromEconomicProposal";

interface Props {
  form: UseFormReturn<any, any>;
  projectId: number;
  setMaterials: Dispatch<React.SetStateAction<RequestMaterialsDto[]>>;
}
const MaterialSection = ({ form, projectId, setMaterials }: Props) => {
  const {
    materialsData,
    isLoadingMaterials,
    errorMaterials,
    handleAddMaterials,
  } = useMaterialSectionManage({ form, projectId, setMaterials });

  return (
    <Accordion variant="light" isDisabled={projectId === undefined}>
      <AccordionItem
        key="1"
        aria-label="materialsSection"
        title="Seccion de materiales"
      >
        {materialsData && materialsData.length > 0 ? (
          <FromEconomicProposal
            errorMaterials={errorMaterials}
            form={form}
            handleAddMaterials={handleAddMaterials}
            isLoadingMaterials={isLoadingMaterials}
            materialsData={materialsData}
          />
        ) : (
          <FormMaterials handleAddMaterials={handleAddMaterials} />
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default MaterialSection;
