import { getCompanyById } from "@/services/utils/utils-service";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { PermanentJobIcon } from "hugeicons-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CopmpanyMenu = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      if (companyName === "") {
        setCompanyName(await getCompanyById());
      }
    };
    fetch();
  }, []);
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 cursor-pointer">
          <PermanentJobIcon size={24} />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="profile"
          className="-2"
          onClick={() => router.push("/company")}
        >
          <p className="font-semibold">{companyName}</p>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Cerrar cesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CopmpanyMenu;
