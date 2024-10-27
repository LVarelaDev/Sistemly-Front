import { CustomCheckbox } from "@/components/ui/CustomCheckbox/CustomCheckbox";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import Modal from "@/components/ui/Modal/Modal";
import { RequestMaterialsDto } from "@/models/Requests/Requests";
import { Button, CheckboxGroup } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  data: RequestMaterialsDto[];
}

const SectionMaterials = ({ data }: Props) => {
  const [groupSelected, setGroupSelected] = useState([]);

  const form = useForm();

  const [showModal, setShowModal] = useState(false);

  const handle = () => {};

  return (
    <div className="flex flex-col flex-1 gap-1 w-full max-h-[400px] overflow-y-auto custom-scroll">
      <div className="flex justify-between items-center p-2">
        <p>Seleccionar materiales</p>
        <div className="flex gap-3">
          <InputSearch
            form={form}
            name="valueSearch"
            placeholder="Buscar materiales"
          />
          {groupSelected.length >= 1 && (
            <Button color="primary" onClick={() => setShowModal(true)}>
              Proveedores
            </Button>
          )}
        </div>
      </div>
      <CheckboxGroup
        value={groupSelected}
        onChange={setGroupSelected}
        classNames={{
          base: "w-full",
        }}
      >
        {data &&
          data.map((item) => (
            <CustomCheckbox
              key={item.id}
              value={item.id.toString()}
              item={item}
              itemTitle="name"
            >
              <div className="flex w-full gap-5 justify-center">
                <div className="flex flex-1 flex-col items-center">
                  <p className="text-xs">Nombre</p>
                  <p className="text-sm font-bold">
                    {item.name.slice(0, 50)}...
                    <button
                      onClick={() => setShowModal(true)}
                      className="font-normal hover:text-blue-700"
                    >
                      más
                    </button>
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-center">
                  <p className="text-xs">Cantidad</p>
                  <p className="text-sm font-bold">{item.quantity}</p>
                </div>
                <div className="flex flex-1 flex-col items-center">
                  <p className="text-xs">Unidad de medida</p>
                  <p className="text-sm font-bold">{item.unitMeasure}</p>
                </div>
              </div>
              <Modal
                action={handle}
                displayButton="Cerrar"
                isOpen={showModal}
                size="xl"
                title="Detalle de material"
                onClose={() => setShowModal(false)}
              >
                <div>hola</div>
              </Modal>
            </CustomCheckbox>
          ))}
      </CheckboxGroup>
    </div>
  );
};

export default SectionMaterials;
