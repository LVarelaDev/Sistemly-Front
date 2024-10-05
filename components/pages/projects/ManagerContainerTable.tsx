"use client";
import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import useDebounce from "@/hooks/useDebounce";
import { EnumEndpoints, getProjects } from "@/services/projects/projectService";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import ProjectForm from "./partials/ProjectForm";
import TableHeader from "./partials/TableHeaders";
import TableProject from "./partials/TableProjects";

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
    <div className="flex flex-col gap-5">
      <TableHeader form={form} setShowModal={setShowModal} />
      <BaseFetchContainer data={projects} isLoading={isLoading} error={error}>
        <div className="flex flex-col gap-4">
          <TableProject data={projects} />
        </div>
        <ProjectForm isOpen={showModal} setShowModal={setShowModal} />
      </BaseFetchContainer>
    </div>
  );
};

export default ManagerContainerTable;
