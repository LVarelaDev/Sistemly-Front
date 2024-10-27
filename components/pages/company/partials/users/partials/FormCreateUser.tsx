import FComboBox from "@/components/ui/Inputs/FComboBox";
import InputPassword from "@/components/ui/Inputs/InputPassword";
import InputText from "@/components/ui/Inputs/InputText";
import RoleInput from "@/components/ui/RolesInput/RoleInput";
import { CreateUserDto } from "@/models/users/usersDto";
import { EnumEndpoints, getRoles } from "@/services/utils/utils-service";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";

interface Props {
  form: UseFormReturn<CreateUserDto, any>;
}

const FormCreateUser = ({ form }: Props) => {
  const { data } = useSWR([EnumEndpoints.GetRoles], () => getRoles());

  return (
    <form className="flex flex-col gap-3">
      <FComboBox
        form={form}
        name="idRol"
        label="Seleccionar un rol"
        dataList={data}
        displayValue="value"
        itemValue="key"
        rules={{ required: "este campo es requerido" }}
      />
      <div className="grid grid-cols-2 gap-2">
        <InputText
          form={form}
          label="Nombres"
          name="name"
          placeholder="Escribe los nombres"
          rules={{ required: "este campo es requerido" }}
        />
        <InputText
          form={form}
          label="Apellido"
          name="lastName"
          placeholder="Escribe los apellidos"
          rules={{ required: "este campo es requerido" }}
        />
      </div>
      <InputText
        form={form}
        label="Correo"
        name="email"
        placeholder="Escribe el correo"
        rules={{ required: "este campo es requerido" }}
      />
      <InputPassword form={form} name="password"/>
    </form>
  );
};

export default FormCreateUser;
