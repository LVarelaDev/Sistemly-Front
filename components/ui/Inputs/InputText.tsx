import React from "react";
import { Input } from "@nextui-org/react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<any, any>;
  name: string;
  label: string;
  rules?: RegisterOptions<any, string>;
  placeholder?: string;
  type?: string;
  price?: boolean;
  clasName?: string;
};

const InputText = ({
  form,
  name,
  label,
  rules,
  placeholder,
  type = "text",
  price = false,
  clasName,
}: Props) => {
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
        className={clasName}
        startContent={
          price && (
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          )
        }
      />
      {/* {errors && typeof errors[name].message === 'string' && (
        <p className="text-danger text-xs">
          {errors[name].message}
        </p>
      )} */}
    </div>
  );
};

export default InputText;
