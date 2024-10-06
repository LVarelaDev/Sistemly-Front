import InputText from "@/components/ui/Inputs/InputText";
import Toggle from "@/components/ui/Toggle/Toggle";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any>;
}

const FormAdd = ({ form }: Props) => {
  const changeDate = form.watch("changeDate");
  return (
    <form className="flex flex-col gap-5">
      <InputText
        form={form}
        label="Importar archivo"
        name="file"
        type="file"
        rules={{ required: "Este campo es requerido" }}
      />
      <div className="flex flex-col gap-4">
        <Toggle
          form={form}
          name="changeDate"
          label="¿Deseas cambiar la fecha de finalización del proyecto?"
        />
        {changeDate && (
          <InputText
            form={form}
            name="finishDateProject"
            label="Ingresa una nueva fecha de finalizacion"
            type="date"
            placeholder="Selecciona la fecha de finalizacion del proyecto"
          />
        )}
      </div>
    </form>
  );
};

export default FormAdd;
