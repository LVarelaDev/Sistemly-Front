"use client";

import { Link } from "@nextui-org/link";
import { ArrowLeft01Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-x-2 bg-default-200 p-2 rounded-xl shadow">
      <Link
        onClick={router.back}
        className="text-gray-700 hover:underline cursor-pointer capitalize"
      >
        <ArrowLeft01Icon /> 
      </Link>
    </div>
  );
};

export default BackButton;
