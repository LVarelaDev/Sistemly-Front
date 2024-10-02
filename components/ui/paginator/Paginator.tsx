"use client";
import { PaginationProps } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ ...props }: PaginationProps) => {
  // Hooks

  return (
    <Pagination
      showControls
      total={props.total}
      initialPage={props.initialPage}
    />
  );
};

export default Pagination;
