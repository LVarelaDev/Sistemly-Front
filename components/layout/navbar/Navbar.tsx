"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUiNavbar,
} from "@nextui-org/navbar";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import CopmpanyMenu from "./CompanyMenu/CopmpanyMenu";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <NextUiNavbar
      maxWidth="full"
      position="sticky"
      className="bg-white border-b"
    >
      <NavbarContent justify="start">
        <NavbarItem className="text-gray-700">
          <p className="text-xl font-bold text-blue-500">Sistemly</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex justify-end">
          <CopmpanyMenu />
        </div>
      </NavbarContent>
    </NextUiNavbar>
  );
};

export default Navbar;
