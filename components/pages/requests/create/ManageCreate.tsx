"use client";
import BackButton from "@/components/ui/Buttons/BackButton";
import { Button } from "@nextui-org/button";
import useCreateRequest from "../hooks/useCreateRequest";
import ShowMaterials from "./partials/ShowMaterials";
import { useForm } from "react-hook-form";
import FormRequest from "./partials/FormRequest";
import { useState } from "react";
import { RequestMaterialsDto } from "@/models/Requests/Requests";

const ManageCreate = () => {
  const [materials, setMaterials] = useState<RequestMaterialsDto[]>([]);

  const form = useForm();

  const { handleCreateRequest } = useCreateRequest();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 p-3">
        <div className="flex items-center font-bold gap-3">
          <BackButton />
          Crear nuevo requerimiento
        </div>
        <Button
          onClick={() =>
            form.handleSubmit((data) => handleCreateRequest(data, materials))()
          }
          color="primary"
        >
          Guardar
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <FormRequest form={form} setMaterials={setMaterials} />
        <div>
          <ShowMaterials materials={materials} setMaterials={setMaterials} />
        </div>
      </div>
    </div>
  );
};

export default ManageCreate;
