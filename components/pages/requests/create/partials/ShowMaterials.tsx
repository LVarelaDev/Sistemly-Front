import { RequestMaterialsDto } from "@/models/Requests/Requests";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch } from "react";

interface Props {
  materials: RequestMaterialsDto[];
  setMaterials: Dispatch<React.SetStateAction<RequestMaterialsDto[]>>;
}
const ShowMaterials = ({ materials, setMaterials }: Props) => {
  const handleRemoveMaterial = (id: number) => {
    setMaterials((prevData) =>
      prevData.filter((material) => material.id !== id)
    );
  };
  return (
    <div className="flex flex-col bg-white gap-2 p-5 rounded-xl">
      <h1>Materiales seleccionados</h1>
      {materials &&
        materials.map((item) => (
          <div
            key={item.id}
            className="flex gap-2 flex-1 rounded-xl border-2 p-2"
          >
            <div className="flex flex-col flex-1">
              <p className="text-xs">Nombre</p>
              <p>{item.name}</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-xs">Unidad de medida</p>
              <p>{item.unitMeasure}</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-xs">Cantidad</p>
              <p>{item.quantity}</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-xs">Valor unitario + IVA</p>
              <p>{convertToCOP(item.unitAmount)}</p>
            </div>
            <button
              onClick={() => handleRemoveMaterial(item.id)}
              className="flex flex-col px-2 justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faTrash}
                className="text-danger-500 p-2 hover:rounded-full hover:bg-gray-300 transition-all "
              />
            </button>
          </div>
        ))}
    </div>
  );
};

export default ShowMaterials;
