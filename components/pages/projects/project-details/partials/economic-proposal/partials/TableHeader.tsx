import InputSearch from "@/components/ui/Inputs/InputSearch";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FilterIcon, PlusSignIcon } from "hugeicons-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ModalAdd from "./ModalAdd";
import { KeyedMutator } from "swr";
import { EconomicProposalDto } from "@/models/projects/economicProposal";
import { ProjectDto } from "@/models/projects/projectDto";

interface Props {
  form: UseFormReturn<any, any>;
  projectId: number;
  mutate: KeyedMutator<EconomicProposalDto[]>;
  mutateProject: KeyedMutator<ProjectDto>;
}

const TableHeader = ({ form, projectId, mutate, mutateProject }: Props) => {
  return (
    <section className="flex items-center justify-between py-3">
      <ModalAdd
        projectId={projectId}
        mutate={mutate}
        mutateProject={mutateProject}
      />

      <div className="flex items-center gap-x-3 w-1/2">
        <InputSearch form={form} name="searchValue" placeholder="Buscar..." />
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
    </section>
  );
};

export default TableHeader;
