"use client";
import InputText from "@/components/ui/Inputs/InputText";
import Modal from "@/components/ui/Modal/Modal";
import AutoCompleteCompanies from "@/components/utils/Companies/AutoCompleteCompanies";
import { ProjectDto } from "@/models/projects/projectDto";
import { Textarea } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateOrUpdate } from "../hooks/useCreateOrUpdate";
import Toggle from "@/components/ui/Toggle/Toggle";

type Props = {
  project?: ProjectDto;
  isOpen: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ProjectForm = ({ project, isOpen, setShowModal }: Props) => {
  const [isEconomicProposal, setIsEconomicProposal] = useState(false);
  const form = useForm<ProjectDto>();

  const economicProposal = form.watch("economicProposal");

  useEffect(() => {
    setIsEconomicProposal(economicProposal);
  }, [economicProposal]);

  const { handleCreateProject } = useCreateOrUpdate();

  const handleCreate = async (data: ProjectDto) => {
    const project: ProjectDto = {
      budget: data.budget,
      clientId: +data.clientId,
      economicProposal: data.economicProposal,
      finishDate: data.finishDate,
      initDate: data.initDate,
      name: data.name,
      description: data.description,
      economicProposalFile: data.economicProposalFile,
    };

    await handleCreateProject(project);
  };

  return (
    <Modal
      action={form.handleSubmit(handleCreate)}
      displayButton="Guardar"
      size="2xl"
      title="Formulario de creacion de proyecto"
      isOpen={isOpen}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <form
        onSubmit={form.handleSubmit(handleCreateProject)}
        className="flex flex-col gap-4"
      >
        <Toggle
          form={form}
          label="¿Tíene propuesta económica?"
          name="economicProposal"
        />
        <InputText
          form={form}
          label="Nombre del proyecto"
          name="name"
          placeholder="Ingresa el nombre del proyecto"
          rules={{ required: "El nombre es requerido" }}
        />
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <AutoCompleteCompanies
              form={form}
              label="Cliente"
              name="clientId"
            />
          </div>
          <div className="flex-1">
            {isEconomicProposal ? (
              <InputText
                form={form}
                label="Importar propuesta economica"
                name="economicProposalFile"
                type="file"
                rules={{ required: "Debe importar la economicProposalFile" }}
              />
            ) : (
              <InputText
                form={form}
                label="Presupuesto del proyecto"
                name="budget"
                price
                placeholder="0.00"
                type="number"
                rules={{ required: "El presupuesto es requerido" }}
              />
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1">
            <InputText
              form={form}
              label="Fecha inicio"
              name="initDate"
              type="date"
              rules={{ required: "La fecha de inicio es requerida" }}
            />
          </div>
          <div className="flex flex-1">
            <InputText
              form={form}
              label="Fecha fin"
              name="finishDate"
              type="date"
              rules={{ required: "La fecha de fin es requerida" }}
            />
          </div>
        </div>
        <Textarea
          variant="bordered"
          labelPlacement="inside"
          label="Descripcion"
          placeholder="Ingresa una descripcion del proyecto"
          {...form.register("description")}
        />
      </form>
    </Modal>
  );
};

export default ProjectForm;
