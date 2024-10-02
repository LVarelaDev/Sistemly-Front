"use client";
import InputText from "@/components/ui/Inputs/InputText";
import AutoCompleteCompanies from "@/components/utils/Companies/AutoCompleteCompanies";
import { ProjectDto } from "@/models/projects/projectDto";
import { Button, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useCreateOrUpdate } from "../hooks/useCreateOrUpdate";

type Props = {
  project?: ProjectDto;
};

const ProjectForm = ({ project }: Props) => {
  const form = useForm<ProjectDto>();

  const { handleCreateProject } = useCreateOrUpdate();

  const handleCreate = async (data: ProjectDto) => {
    const project: ProjectDto = {
      budget: data.budget,
      clientId: +data.clientId,
      finishDate: data.finishDate,
      initDate: data.initDate,
      name: data.name,
      materialDescriptions: data.materialDescriptions,
    };

    await handleCreateProject(project);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleCreateProject)}
      className="flex flex-col gap-4 p-4 rounded-lg shadow-lg bg-white "
    >
      <p className="font-bold text-gray-500">
        Formulario de creacion de proyecto
      </p>
      <InputText
        form={form}
        label="Nombre del proyecto"
        name="name"
        placeholder="Ingresa el nombre del proyecto"
        rules={{ required: "El nombre es requerido" }}
      />
      <div className="flex gap-4">
        <div className="flex-1">
          <AutoCompleteCompanies form={form} label="Cliente" name="clientId" />
        </div>
        <div className="flex-1">
          <InputText
            form={form}
            label="Presupuesto del proyecto"
            name="budget"
            price
            placeholder="0.00"
            type="number"
            rules={{ required: "El presupuesto es requerido" }}
          />
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
        label="Descripcion de materiales"
        placeholder="Ingresa una descripcion de los materiales"
        {...form.register("materialDescriptions")}
      />
      <Button
        onClick={form.handleSubmit(handleCreate)}
        className="bg-primary text-white"
      >
        Guardar
      </Button>
    </form>
  );
};

export default ProjectForm;
