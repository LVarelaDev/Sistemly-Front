"use client";
import LayoutComponent from "@/components/layout/layout.component";
import Navbar from "@/components/layout/navbar/Navbar";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

const PageManager = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  // Mostrar un estado de carga mientras se verifica la sesión
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Renderizar el layout y el contenido para usuarios autenticados
  if (session?.user && status === "authenticated") {
    return (
      <main className="flex flex-grow overflow-hidden">
        <LayoutComponent />
        <section className="flex-1 custom-scroll-primary">
          <Navbar />
          <section className="px-4 py-2">{children}</section>
        </section>
      </main>
    );
  }

  // Renderizar el componente de login o registro para usuarios no autenticados
  return (
    <main className="flex flex-1 justify-center items-center h-screen">
      {children}
    </main>
  );
};

export default PageManager;
