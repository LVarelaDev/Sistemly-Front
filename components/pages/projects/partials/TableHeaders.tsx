"use client";

import InputSearch from "@/components/ui/Inputs/InputSearch";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FilterIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const TableHeader = ({ form, setShowModal }: Props) => {
  const pathName = usePathname();
  return (
    <section className="flex items-center justify-between py-3">
      <Button
        color="primary"
        endContent={<PlusSignIcon size={20} />}
        onClick={() => setShowModal(true)}
      >
        Agregar
      </Button>

      <div className=" flex items-center gap-x-3">
        <InputSearch form={form} name="searchValue" placeholder="Buscar..." />
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="flat" color="primary">
              <FilterIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Selection sort" selectionMode="single">
            <DropdownItem key="desc" href={`${pathName}?sort=desc`}>
              Ultimos equipos agregados
            </DropdownItem>
            <DropdownItem key="asc" href={`${pathName}?sort=asc`}>
              Primeros equipos agregados
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </section>
  );
};

export default TableHeader;
