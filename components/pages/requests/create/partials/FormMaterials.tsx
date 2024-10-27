import InformationSection from "@/components/pages/projects/project-details/partials/project-information/partials/InformationSection";
import InputText from "@/components/ui/Inputs/InputText";
import { RequestMaterialsDto } from "@/models/Requests/Requests";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  handleAddMaterials: (item: RequestMaterialsDto, isCreated: boolean) => void;
}
const FormMaterials = ({ handleAddMaterials }: Props) => {
  const formMaterials = useForm<RequestMaterialsDto>({
    defaultValues: { id: null },
  });

  const [amountWithIva, setAmountWithIva] = useState<number>(0);
  const amount = formMaterials.watch("unitAmount");

  useEffect(() => {
    setAmountWithIva(amount * 1.19);
  }, [amount]);

  return (
    <div className="flex flex-col gap-3">
      <InputText
        form={formMaterials}
        label="Nombre"
        name="name"
        rules={{ required: "Este campo es requerido" }}
        placeholder="Escriba el nombre del material"
      />
      <div className="grid grid-cols-2 gap-3">
        <InputText
          form={formMaterials}
          label="Unida de medida"
          name="unitMeasure"
          rules={{ required: "Este campo es requerido" }}
          placeholder="Escriba la unidad de medida"
        />
        <InputText
          form={formMaterials}
          label="Cantidad"
          name="quantity"
          type="number"
          rules={{ required: "Este campo es requerido" }}
          placeholder="Ingrese la cantidad"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <InputText
            form={formMaterials}
            name="unitAmount"
            label="Valor unitario (SIN IVA)"
            price
            type="number"
            placeholder="Ingresa el valor unitario (SIN IVA)"
            rules={{ required: "Es requerido este campo" }}
          />
        </div>
        <div className="flex-1 flex items-center">
          <InformationSection
            title="Valor + IVA"
            direction="flex-col"
            gap="gap-1"
            sizeTitle="text-sm"
            sizeValue="text-sm"
            value={convertToCOP(amountWithIva)}
          />
        </div>
      </div>
      <Button
        color="primary"
        onClick={formMaterials.handleSubmit((data) =>
          handleAddMaterials(data, true)
        )}
      >
        Agregar Material
      </Button>
    </div>
  );
};

export default FormMaterials;
