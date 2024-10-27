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
import { usePathname, useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any>;
}

const TableHeader = ({ form}: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className="flex items-center justify-between py-3">
      <Button
        color="primary"
        endContent={<PlusSignIcon size={20} />}
        onClick={() => {router.push("/requests/create")}}
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
