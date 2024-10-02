import { ProjectDto } from "@/models/projects/projectDto";
import { createProject } from "@/services/projects/projectService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCreateOrUpdate = () => {
  const router = useRouter();

  const handleCreateProject = async (project: ProjectDto) => {
    toast.promise(createProject(project), {
      loading: "Creando Proyecto...",
      error: "Error al crear proyecto",
      success(response) {
        router.push("/projects");
        return response?.value ?? "Proyecto creado con exito";
      },
    });
  };

  return { handleCreateProject };
};
