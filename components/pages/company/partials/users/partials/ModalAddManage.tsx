import Modal from "@/components/ui/Modal/Modal";
import { CreateUserDto, UserListDto } from "@/models/users/usersDto";
import { createUser } from "@/services/users/userService";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import FormCreateUser from "./FormCreateUser";
import { KeyedMutator } from "swr";

interface Props {
  mutateUser: KeyedMutator<UserListDto[]>;
}
const ModalAddManage = ({ mutateUser }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const form = useForm<CreateUserDto>();

  const handleCreate = async (data: CreateUserDto) => {
    toast.promise(createUser(data), {
      loading: "Creando Usuario...",
      error: "Error al crear usuario",
      success(response) {
        if (response.key === 1) {
          toast.info(response.value);
          return;
        }

        mutateUser();
        setShowModal(false);
        return response?.value ?? "Proyecto creado con exito";
      },
    });
  };

  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-lg font-bold">Usuarios</h1>
      <Button onClick={() => setShowModal(true)} color="primary">
        Nuevo
      </Button>
      <Modal
        isOpen={showModal}
        action={form.handleSubmit(handleCreate)}
        displayButton="Guardar"
        size="xl"
        title="Crear nuevo usuario"
        colorButton="primary"
        onClose={() => setShowModal(false)}
      >
        <FormCreateUser form={form} />
      </Modal>
    </div>
  );
};

export default ModalAddManage;
