"use client";
import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import BackButton from "@/components/ui/Buttons/BackButton";
import {
  EnumEndpoints,
  getRequestDetail,
} from "@/services/requests/requestService";
import { Accordion, AccordionItem, CheckboxGroup } from "@nextui-org/react";
import useSWR from "swr";
import AssignedUsers from "./partials/AssignedUsers/AssignedUsers";
import RequestInformation from "./partials/InformationGeneral/RequestInformation";
import { useEffect, useState } from "react";
import { CustomCheckbox } from "@/components/ui/CustomCheckbox/CustomCheckbox";
import SectionMaterials from "./partials/Materials/SectionMaterials";

interface Props {
  id: number;
}
const RequestDetailManage = ({ id }: Props) => {
  const { data, isLoading, error } = useSWR(
    [EnumEndpoints.GetRequestDetail],
    () => getRequestDetail(id)
  );

  return (
    <div className="flex flex-col gap-5 py-2">
      <div className="flex gap-3 items-center">
        <BackButton />{" "}
        <p className="font-bold text-gray-700 text-lg">
          Información de requerimiento
        </p>
      </div>

      <BaseFetchContainer data={data} isLoading={isLoading} error={error}>
        <Accordion variant="splitted" showDivider={false} isDisabled={false}>
          <AccordionItem
            key="1"
            aria-label="generalInformation"
            title="Informacion general"
          >
            <div className="flex flex-col gap-5 p-4">
              {data && (
                <>
                  <div className="flex">
                    <RequestInformation data={data.requestInformation} />
                    <AssignedUsers
                      data={data.requestInformation.assignedUsers}
                    />
                  </div>
                  <hr />
                  <SectionMaterials data={data.materials} />
                </>
              )}
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="comparativeBox"
            title="Cuadro comparativo"
          >
            {/* <div className="flex flex-col gap-1 w-full p-3">
              <CheckboxGroup
                label="Seleccionar materiales"
                value={groupSelected}
                onChange={setGroupSelected}
                classNames={{
                  base: "w-full",
                }}
              >
                {data &&
                  data.materials.map((item) => (
                    <CustomCheckbox
                      key={item.id}
                      value={item.id.toString()}
                      item={item}
                      itemTitle="name"
                    >
                      <div className="flex w-full gap-5 justify-center">
                        <div className="flex flex-1 flex-col items-center">
                          <p className="text-xs">Nombre</p>
                          <p className="text-sm font-bold">{item.name}</p>
                        </div>
                        <div className="flex flex-1 flex-col items-center">
                          <p className="text-xs">Cantidad</p>
                          <p className="text-sm font-bold">{item.quantity}</p>
                        </div>
                        <div className="flex flex-1 flex-col items-center">
                          <p className="text-xs">Unidad de medida</p>
                          <p className="text-sm font-bold">
                            {item.unitMeasure}
                          </p>
                        </div>
                      </div>
                    </CustomCheckbox>
                  ))}
              </CheckboxGroup>
            </div> */}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="salesOrder"
            title="Ordenes de compra"
          >
            <div>hola</div>
          </AccordionItem>
        </Accordion>
      </BaseFetchContainer>
    </div>
  );
};

export default RequestDetailManage;
