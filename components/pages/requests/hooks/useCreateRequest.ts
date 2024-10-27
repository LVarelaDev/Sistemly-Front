import {
    CreateRequestPayloadDto,
    RequestMaterialsDto,
} from "@/models/Requests/Requests";
import { createRequest } from "@/services/requests/requestService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useCreateRequest = () => {
  const router = useRouter();
  const handleCreateRequest = (data: any, materials: RequestMaterialsDto[]) => {
    if (materials.length <= 0) {
      return toast.warning("Debe seleccionar al menos un mateial");
    }

    const request: CreateRequestPayloadDto = {
      type: data.type,
      priority: data.priority,
      projectId: +data.project,
      status: data.status,
      desctiption: data.description,
      assignedUser: data.user,
      materials: materials,
    };

    toast.promise(createRequest(request), {
      loading: "Creando Requerimiento...",
      error: "Error al crear el requerimiento",
      success(response) {
        router.push("/requests");
        if (response.key === 1) {
          return toast.error(response.value);
        } else {
          return response.value ?? "Requerimiento creado con exito";
        }
      },
    });
  };

  return { handleCreateRequest };
};

export default useCreateRequest;
