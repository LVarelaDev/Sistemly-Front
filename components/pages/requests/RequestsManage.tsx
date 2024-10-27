"use client";
import useDebounce from "@/hooks/useDebounce";
import { EnumEndpoints, getRequests } from "@/services/requests/requestService";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import TableHeader from "./partials/TableHeader";
import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import TableRequests from "./Table/TableRequests";

const RequestsManage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const form = useForm();
  const value = useDebounce<string>(form.watch("searchValue"), 300);

  const {
    data: request,
    error,
    isLoading,
  } = useSWR([EnumEndpoints.GetRequests, value], () => getRequests());
  return (
    <div className="flex flex-col gap-5">
      <TableHeader form={form} />
      <BaseFetchContainer data={request} isLoading={isLoading} error={error}>
        <div className="flex flex-col gap-4">
          <TableRequests data={request} />
        </div>
        {/* <ProjectForm isOpen={showModal} setShowModal={setShowModal} /> */}
      </BaseFetchContainer>
    </div>
  );
};

export default RequestsManage;
