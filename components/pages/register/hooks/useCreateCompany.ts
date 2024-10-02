import { Company } from "@/models/companies/company";
import { createCompany } from "@/services/companies/company-service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCreateCompany = () => {
  const router = useRouter();

  const handleCreateCompany = async (data: Company) => {
    toast.promise(createCompany(data), {
      loading: "Creando empresa...",
      error: "Error al actualizar equipo",
      success(response) {
        router.push("/login");
        return response?.value ?? "Empresa creada con exito";
      },
    });
  };

  return { handleCreateCompany };
};
