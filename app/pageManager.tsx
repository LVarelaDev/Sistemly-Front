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
      <main className="flex flex-col h-screen">
        <Navbar />

        <section className="flex flex-1 overflow-hidden"> {/* overflow-hidden previene el scroll en esta sección */}
          <LayoutComponent />

          {/* Activamos el scroll solo en el área del children */}
          <section className="flex-1 px-4 pt-2 pb-5 bg-gray-100 overflow-y-auto custom-scroll">
            {children}
          </section>
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
