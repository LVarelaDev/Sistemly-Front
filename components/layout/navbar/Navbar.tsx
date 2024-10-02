"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUiNavbar,
} from "@nextui-org/navbar";
import { Avatar, Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

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
          {/* <BreadcrumbComponent /> */}
          Bienvenido{" "}
          <strong className="text-gray-800">{session?.user?.name}</strong>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex justify-end">
          <Button
            className="flex gap-2 justify-end text-xs w-full font-bold text-white bg-danger cursor-pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Cerrar sesión
          </Button>
        </div>
      </NavbarContent>
    </NextUiNavbar>
  );
};

export default Navbar;
