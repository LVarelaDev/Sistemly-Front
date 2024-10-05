import Modal from "@/components/ui/Modal/Modal";
import { EconomicProposalDto } from "@/models/projects/economicProposal";
import { ProjectDto } from "@/models/projects/projectDto";
import { updateEconomicProposal } from "@/services/projects/projectService";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { KeyedMutator } from "swr";
import FormEdit from "./FormEdit";

interface Props {
  economicProposal: EconomicProposalDto;
  mutate: KeyedMutator<EconomicProposalDto[]>;
  mutateProject: KeyedMutator<ProjectDto>;
}

const ModalEdit = ({ economicProposal, mutate, mutateProject }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<EconomicProposalDto>({
    defaultValues: {
      id: economicProposal.id,
      name: economicProposal.name,
      item: economicProposal.item,
      quantity: economicProposal.quantity,
      unitAmount: economicProposal.unitAmount,
      unitMeasure: economicProposal.unitMeasure,
    },
  });

  const handleEditModal = (data: EconomicProposalDto) => {
    toast.promise(updateEconomicProposal(data), {
      loading: "Actualizando material...",
      error: "Error al actualizar material",
      success(response) {
        return response?.value ?? "Material actualizado con exito";
      },
    });
    mutate();
    mutateProject();
  };

  return (
    <>
      <Tooltip content="Actualizar" delay={100} closeDelay={50}>
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPencil} className="text-blue-500" />
        </button>
      </Tooltip>
      <Modal
        size="xl"
        action={form.handleSubmit(handleEditModal)}
        displayButton="Actualizar"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Actualizar material"
      >
        <FormEdit form={form} />
      </Modal>
    </>
  );
};

export default ModalEdit;
