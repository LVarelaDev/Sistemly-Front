import InputText from "@/components/ui/Inputs/InputText";
import { EconomicProposalDto } from "@/models/projects/economicProposal";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import InformationSection from "../../project-information/partials/InformationSection";

interface Props {
  form: UseFormReturn<EconomicProposalDto, any>;
}

const FormEdit = ({ form }: Props) => {
  const [amountWithIva, setAmountWithIva] = useState<number>(0);
  const amount = form.watch("unitAmount");
  //   const quantity = form.watch("quantity");

  useEffect(() => {
    setAmountWithIva(amount * 1.19);
  }, [amount]);

  return (
    <form className="flex flex-col gap-3">
      <InputText
        form={form}
        label="Nombre material"
        name="name"
        placeholder="Ingrese un nombre de material"
        rules={{ required: "Es requerido este campo" }}
      />
      <div className="flex gap-3">
        <div className="flex-1">
          <InputText
            form={form}
            name="unitMeasure"
            label="Unidad de medida"
            placeholder="Ingresa la unidad de medida"
            rules={{ required: "Es requerido este campo" }}
          />
        </div>
        <div className="flex-1">
          <InputText
            form={form}
            name="quantity"
            label="Cantidad"
            placeholder="Ingresa la cantidad"
            rules={{ required: "Es requerido este campo" }}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <InputText
            form={form}
            name="unitAmount"
            label="Valor unitario (SIN IVA)"
            price
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
    </form>
  );
};

export default FormEdit;
