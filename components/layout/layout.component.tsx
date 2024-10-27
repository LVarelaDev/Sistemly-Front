"use client";
import { useSidebar } from "@/stores/sideBarStore";
import { cn } from "@nextui-org/theme";
import SidebarItem from "./partials/SidebarItems";
import ToogleSidebar from "./partials/ToggleSideBar";

const LayoutComponent = () => {

  const { isExpanded } = useSidebar();

  return (
    <aside
      className={cn(
        "h-screen flex z-10 transition-all",
        isExpanded ? "w-[290px]" : "w-[73px]"
      )}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm p-4 fixed">
        <section className="flex items-center justify-between transition-all">
          <div
            className={cn(
              "overflow-hidden transition-all",
              isExpanded ? "w-52" : "w-0"
            )}
          >
            
          </div>
          <ToogleSidebar />
        </section>
        <SidebarItem />
      </nav>
    </aside>
  );
};

export default LayoutComponent;
