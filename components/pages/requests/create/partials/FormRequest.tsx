import AutoCompleteField from "@/components/ui/Inputs/autoCompleteField/AutoCompleteField";
import FComboBox from "@/components/ui/Inputs/FComboBox";
import InputText from "@/components/ui/Inputs/InputText";
import { RequestMaterialsDto } from "@/models/Requests/Requests";
import {
  EnumEndpoints,
  getProjectByCompanyId,
  getUsersForCombo,
} from "@/services/utils/utils-service";
import { Textarea } from "@nextui-org/input";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";
import MaterialSection from "./MaterialSection";

const status = [
  { id: "Active", name: "Activo" },
  { id: "Inactive", name: "Inactivo" },
];

const priority = [
  { id: "High", name: "Alta" },
  { id: "Average", name: "Media" },
  { id: "Low", name: "Baja" },
];

interface Props {
  form: UseFormReturn<any, any>;
  setMaterials: Dispatch<SetStateAction<RequestMaterialsDto[]>>;
}

const FormRequest = ({ form, setMaterials }: Props) => {
  const projectId = form.watch("project");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR([EnumEndpoints.GetUsersForCombo], () => getUsersForCombo());

  const {
    data: project,
    isLoading: isLoadingCompanies,
    error: errorCompanies,
  } = useSWR([EnumEndpoints.GetProjectByCompanyId], () =>
    getProjectByCompanyId()
  );
  return (
    <div className="flex flex-col gap-[10px] bg-white rounded-xl p-5 border">
      <p className="text-lg">Información de requerimiento</p>
      <AutoCompleteField
        dataList={users}
        displayValue="name"
        itemValue="id"
        form={form}
        name="user"
        label="Busca una persona para asignar el requerimiento"
        displayEmail="email"
        displayIcon="letterForIcon"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputText
          form={form}
          name="type"
          label="Tipo de requerimiento"
          placeholder="Escribe un tipo de requerimiento"
        />
        <FComboBox
          dataList={project}
          displayValue="value"
          form={form}
          itemValue="key"
          name="project"
          label="Selecciona un proyecto"
          rules={{ required: "Este campo es requerido" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FComboBox
          dataList={priority}
          displayValue="name"
          form={form}
          itemValue="id"
          name="priority"
          label="Selecciona una prioridad"
          rules={{ required: "Este campo es requerido" }}
        />
        <FComboBox
          dataList={status}
          displayValue="name"
          form={form}
          itemValue="id"
          name="status"
          label="Selecciona un estado"
          rules={{ required: "Este campo es requerido" }}
        />
      </div>
      <Textarea
        variant="bordered"
        labelPlacement="inside"
        label="Descripcion"
        placeholder="Ingresa una descripcion del proyecto"
        {...form.register("description")}
      />
      {projectId && (
        <MaterialSection
          form={form}
          setMaterials={setMaterials}
          projectId={projectId}
        />
      )}
    </div>
  );
};

export default FormRequest;
