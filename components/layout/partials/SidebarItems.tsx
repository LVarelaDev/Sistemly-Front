"use client";

import { useSidebar } from "@/stores/sideBarStore";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import { ContractsIcon, Mail01Icon, Mail02Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = () => {
  const { isExpanded } = useSidebar();
  const SidebarLink = [
    {
      name: "Proyectos",
      path: "/projects",
      icon: <ContractsIcon size={21} strokeWidth={1.8} />,
    },
    {
      name: "Requerimientos",
      path: "/requests",
      icon: <Mail02Icon size={21} strokeWidth={1.8} />,
    },
  ];
  const pathName = usePathname();
  return (
    <section className="flex flex-col gap-y-1 mt-5">
      {SidebarLink.map(({ name, path, icon }) => (
        <Tooltip
          key={name + path}
          content={name}
          placement="right"
          isDisabled={isExpanded}
        >
          <Link
            href={path}
            className={cn(
              "flex items-center hover:bg-indigo-100 hover:text-blue-500 transition-colors ease-linear p-2 rounded-xl text-gray-600",
              pathName === path && "bg-indigo-100 text-blue-500"
            )}
          >
            {icon}
            <span
              className={cn(
                "overflow-hidden transition-all",
                isExpanded ? "w-52 ml-3" : "w-0"
              )}
            >
              {name}
            </span>
          </Link>
        </Tooltip>
      ))}
    </section>
  );
};

export default SidebarItem;
