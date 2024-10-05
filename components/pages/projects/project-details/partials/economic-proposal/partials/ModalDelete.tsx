import InputText from "@/components/ui/Inputs/InputText";
import Modal from "@/components/ui/Modal/Modal";
import Toggle from "@/components/ui/Toggle/Toggle";
import { EconomicProposalDto } from "@/models/projects/economicProposal";
import { ProjectDto } from "@/models/projects/projectDto";
import { deleteEconomicProposal } from "@/services/projects/projectService";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { KeyedMutator } from "swr";

interface Props {
  id: number;
  mutate: KeyedMutator<EconomicProposalDto[]>;
  mutateProject: KeyedMutator<ProjectDto>;
}

const ModalDelete = ({ id, mutate, mutateProject }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<{ finishDate: Date; question: boolean }>();
  const question = form.watch("question");

  const handleDeleteEconomicProposal = (data: any) => {
    toast.promise(deleteEconomicProposal(id, data.finishDate), {
      loading: "Eliminando material...",
      error: "Error al eliminar material",
      success(response) {
        mutate();
        mutateProject();
        setIsOpen(false);
        return response?.value ?? "Material eliminado con exito";
      },
    });
  };

  return (
    <>
      <Tooltip content="Actualizar" delay={100} closeDelay={50}>
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faTrashCan} className="text-danger-500" />
        </button>
      </Tooltip>
      <Modal
        action={form.handleSubmit(handleDeleteEconomicProposal)}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        title="Eliminar material"
        displayButton="Eliminar"
        colorButton="danger"
      >
        <div className="flex flex-col gap-3">
          <Toggle
            form={form}
            name="question"
            color="success"
            label="¿Desea cambiar la fecha de finalizacion del proyecto?"
          />

          {question && (
            <InputText
              type="date"
              form={form}
              name="finishDate"
              label="Fecha de finalizacion del proyecto"
              placeholder="Ingresa una fecha"
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalDelete;
