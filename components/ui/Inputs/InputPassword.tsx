import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any>;
  name: string;
}

const InputPassword = ({ form, name }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      label="Contraseña"
      variant="bordered"
      placeholder="Ingresa tu contraseña"
      {...form.register(name)}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};

export default InputPassword;
