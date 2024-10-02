import FComboBox from "@/components/ui/Inputs/FComboBox";
import { EnumEndpoints, getCompanies } from "@/services/utils/utils-service";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";

interface Props {
  form: UseFormReturn<any, any>;
  name: string;
  label: string;
}

const AutoCompleteCompanies = ({ form, name, label }: Props) => {
  const { data } = useSWR([EnumEndpoints.GetCompanies], () => getCompanies());
  return (
    <>
      {data && (
        <FComboBox
          dataList={data}
          displayValue="value"
          itemValue="key"
          form={form}
          name={name}
          label={label}
        />
      )}
    </>
  );
};

export default AutoCompleteCompanies;
