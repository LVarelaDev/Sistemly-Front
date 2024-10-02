"use client";
import InputText from "@/components/ui/Inputs/InputText";
import MultiSelect from "@/components/ui/MultiSelect/MultiSelect";
import { Company } from "@/models/companies/company";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { UseFormReturn } from "react-hook-form";
import { useCreateCompany } from "../hooks/useCreateCompany";

const serviceType = [
  { id: "PRODUCTO", name: "Producto" },
  { id: "SERVICIO", name: "Servicio" },
];

type props = {
  form: UseFormReturn<any, any>;
};

const FormRegister = ({ form }: props) => {
  const { handleCreateCompany } = useCreateCompany();

  const { handleSubmit } = form;

  const onSubmit = async (data: any) => {
    const dataSubmit: Company = {
      email: data.email,
      category: data.category,
      companyName: data.companyName,
      nit: data.nit,
      rut: data.rut,
      serviceType: data.serviceType,
    };

    await handleCreateCompany(dataSubmit);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <InputText
        form={form}
        name="companyName"
        type="text"
        label="Razón social"
        placeholder="Ingresa la razón social de tu empresa."
        rules={{ required: "La razón social es obligatoria" }}
      />
      <div className="flex gap-2">
        <InputText
          form={form}
          name="nit"
          type="text"
          label="NIT"
          placeholder="Ingresa el NIT de tu empresa"
          rules={{ required: "El NIT es obligatorio" }}
        />
        <InputText
          form={form}
          name="rut"
          type="text"
          label="Rut"
          placeholder="Ingresa el rut de tu empresa"
          rules={{ required: "El rut es obligatorio" }}
        />
      </div>
      <InputText
        form={form}
        name="email"
        type="email"
        label="Correo"
        placeholder="Ingresa tu correo electrónico"
        rules={{
          required: "El correo es obligatorio",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "El formato del correo no es válido",
          },
        }}
      />
      <div className="flex gap-2">
        <MultiSelect
          form={form}
          dataList={serviceType}
          label="¿Qué ofreces?"
          name="serviceType"
          placeholder="Selecciona tus servicios"
          itemKey="id"
          displayValue="name"
          rules={{ required: "Debes seleccionar al menos un servicio" }}
        />

        <InputText
          form={form}
          name="category"
          type="text"
          label="Categoría"
          placeholder="Ej: Ferretería, Farmacia..."
          rules={{ required: "La categoría es obligatoria" }}
        />
      </div>

      <div className="flex gap-2">
        <InputText
          type="file"
          form={form}
          label="Importa tu inventario. .xlsx"
          name="file"
        />

        <InputText
          type="file"
          form={form}
          label="Importa tu certificado bancario. .pdf"
          name="certificate"
        />
      </div>
      <div className="flex flex-col-reverse gap-2">
        <div className="flex gap-2">
          <Link
            href="/login"
            className="text-center bg-default-300 text-sm rounded-xl p-2 flex-1"
          >
            Ya tengo una cuenta.
          </Link>
          <Button type="submit" color="primary" className="flex-1">
            Guardar
          </Button>
        </div>
        <div className="flex rounded-2xl px-2 py-1 text-sm gap-1">
          <span className="text-danger">IMPORTANTE:</span>
          <span>
            Inicia sesión con tu correo y con la contraseña inicial: 0000, luego
            podrás cambiarla
          </span>
        </div>
      </div>
    </form>
  );
};

export default FormRegister;
