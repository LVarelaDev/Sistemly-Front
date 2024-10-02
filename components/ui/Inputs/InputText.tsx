import React from "react";
import { Input } from "@nextui-org/react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>;
  name: string;
  label: string;
  rules?: RegisterOptions<any, string>;
  placeholder?: string;
  type?: string;
  price?: boolean;
};

const InputText = ({
  form,
  name,
  label,
  rules,
  placeholder,
  type = "text",
  price = false,
}: props) => {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <div className="input-form">
      <Input
        {...register(name, rules)}
        label={label}
        placeholder={placeholder}
        type={type}
        variant="bordered"
        startContent={
          price && (
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          )
        }
      />
      {errors[name] && (
        <p className="text-danger text-xs">{errors[name].message?.toString()}</p>
      )}
    </div>
  );
};

export default InputText;

<Input
  type="number"
  label="Price"
  placeholder="0.00"
  labelPlacement="outside"
  startContent={
    <div className="pointer-events-none flex items-center">
      <span className="text-default-400 text-small">$</span>
    </div>
  }
/>;
