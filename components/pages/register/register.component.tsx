"use client";
import { useForm } from "react-hook-form";
import FormRegister from "./partials/formRegister";

const RegisterComponent = () => {
  const form = useForm({
    mode: "onSubmit",
  });

  return (
    <div className="flex flex-col gap-5 p-6 bg-white border shadow-small rounded-xl">
      <h1 className="text-primary text-center font-bold text-xl">
        Registra tu empresa
      </h1>

      <FormRegister form={form} />
    </div>
  );
};

export default RegisterComponent;
