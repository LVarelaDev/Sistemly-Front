import { EnumEndpoints, getRoles } from "@/services/utils/utils-service";
import React from "react";
import useSWR from "swr";
import InputText from "../Inputs/InputText";
import { UseFormReturn } from "react-hook-form";
import FComboBox from "../Inputs/FComboBox";

interface Props {
  form: UseFormReturn<any, any>;
  name: string;
}

const RoleInput = ({ form, name }: Props) => {
  const { data } = useSWR([EnumEndpoints.GetRoles], () => getRoles());
  return (
    <FComboBox
      form={form}
      name={name}
      label="Seleccionar un rol"
      dataList={data}
      displayValue="value"
      itemValue="key"
      rules={{ required: "este campo es requerido" }}
    />
  );
};

export default RoleInput;
