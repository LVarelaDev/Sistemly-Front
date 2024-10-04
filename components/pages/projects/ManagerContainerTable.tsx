// ManagerContainerTable.tsx
"use client";
import useDebounce from "@/hooks/useDebounce";
import { EnumEndpoints, getProjects } from "@/services/projects/projectService";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import TableHeader from "./partials/TableHeaders";
import TableProject from "./partials/TableProjects";
import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import Modal from "@/components/ui/Modal/Modal";
import ProjectForm from "./partials/ProjectForm";

const ManagerContainerTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const form = useForm();
  const value = useDebounce<string>(form.watch("searchValue"), 300);

  const {
    data: projects,
    error,
    isLoading,
  } = useSWR([EnumEndpoints.GetProjects, value], () =>
    getProjects({
      page: currentPage,
      pageSize: 10,
      sort: value === "" || value === undefined ? undefined : value,
    })
  );

  return (
    <BaseFetchContainer data={projects} isLoading={isLoading} error={error}>
      <div className="flex flex-col gap-4">
        <TableHeader form={form} setShowModal={setShowModal} />
        <TableProject data={projects} />
      </div>
      <ProjectForm isOpen={showModal} setShowModal={setShowModal} />
    </BaseFetchContainer>
  );
};

export default ManagerContainerTable;
