import InputSearch from "@/components/ui/Inputs/InputSearch";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FilterIcon } from "hugeicons-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any>;
}

const TableHeader = ({ form }: Props) => {
  return (
    <div className="flex justify-end items-center gap-x-3">
      <div className="w-1/2">
        <InputSearch
          form={form}
          name="searchValue"
          placeholder="Buscar nombre de material"
        />
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant="flat" color="primary">
            <FilterIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Selection sort" selectionMode="single">
          <DropdownItem key="desc">Ultimos equipos agregados</DropdownItem>
          <DropdownItem key="asc">Primeros equipos agregados</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default TableHeader;
