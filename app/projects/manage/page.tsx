import ManageContainer from "@/components/pages/projects/ManageContainer";
import BackButton from "@/components/ui/Buttons/BackButton";
import React, { Suspense } from "react";

interface Props {
  searchParams: {
    id?: string;
  };
}

const page = ({ searchParams }: Props) => {
  const id = searchParams.id;
  return (
    <main className="container">
      <div className="flex gap-4 pt-2 items-center">
        <BackButton /> <p className="text-xl font-bold text-gray-600">Crear nuevo proyecto</p>
      </div>

      <Suspense fallback={<span>loading...</span>}>
        <ManageContainer id={id} />
      </Suspense>
    </main>
  );
};

export default page;
