"use client";

import { Link } from "@nextui-org/link";
import { ArrowLeft01Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      router.back();
    }
  };

  return (
    <div className="flex items-center gap-x-2 bg-default-200 p-2 rounded-xl shadow">
      <div
        onClick={router.back}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="text-gray-700 hover:underline cursor-pointer capitalize"
        aria-label="Go back"
      >
        <ArrowLeft01Icon />
      </div>
    </div>
  );
};

export default BackButton;
