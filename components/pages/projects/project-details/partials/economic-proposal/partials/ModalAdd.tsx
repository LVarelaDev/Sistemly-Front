import Modal from "@/components/ui/Modal/Modal";
import { Button } from "@nextui-org/button";
import { PlusSignIcon } from "hugeicons-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormAdd from "./FormAdd";
import {
  AddMoreEconomicProposalDto,
  EconomicProposalDto,
} from "@/models/projects/economicProposal";
import { toast } from "sonner";
import { addMoreMaterials } from "@/services/projects/projectService";
import { KeyedMutator } from "swr";
import { ProjectDto } from "@/models/projects/projectDto";

type formAdd = {
  projectId: number;
  finishDateProject: Date;
  file: File;
};

interface Props {
  projectId: number;
  mutate: KeyedMutator<EconomicProposalDto[]>;
  mutateProject: KeyedMutator<ProjectDto>;
}

const ModalAdd = ({ projectId, mutate, mutateProject }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<formAdd>();

  const handleAddMore = (data: formAdd) => {
    const payload: AddMoreEconomicProposalDto = {
      projectId: projectId,
      file: data.file[0],
      newFinishDate:
        data.finishDateProject.toString() == "" ? null : data.finishDateProject,
    };
    console.log(payload)
    toast.promise(addMoreMaterials(payload), {
      loading: "Agregando materiales...",
      error: "Error al agregar materiales",
      success(response) {
        mutate();
        mutateProject();
        setIsOpen(false);
        return response?.value ?? "Materiales agregados con exito";
      },
    });
  };
  return (
    <>
      <Button
        color="primary"
        endContent={<PlusSignIcon size={20} />}
        onClick={() => setIsOpen(true)}
      >
        Agregar materiales
      </Button>
      <Modal
        action={form.handleSubmit(handleAddMore)}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        displayButton="Guardar"
        size="xl"
        title="Agregar materiales"
      >
        <FormAdd form={form} />
      </Modal>
    </>
  );
};

export default ModalAdd;
