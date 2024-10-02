import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>;
  name: string;
  label: string;
  rules?: RegisterOptions<any, string>;
  placeholder?: string;
  dataList: any[];
  itemKey: string;
  displayValue: string;
};

const MultiSelect = ({
  form,
  label,
  name,
  placeholder,
  rules,
  itemKey,
  dataList,
  displayValue,
}: props) => {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <div className="input-form">
      <Select
        label={label}
        placeholder={placeholder}
        variant="bordered"
        selectionMode="multiple"
        defaultSelectedKeys={dataList[+itemKey]}
        {...register(name, rules)}
      >
        {dataList.map((option) => (
          <SelectItem key={option.id} value={option.id}>
            {`${option[displayValue]}`}
          </SelectItem>
        ))}
      </Select>

      {errors[name] && (
        <p className="text-danger">{errors[name].message?.toString()}</p>
      )}
    </div>
  );
};

export default MultiSelect;
