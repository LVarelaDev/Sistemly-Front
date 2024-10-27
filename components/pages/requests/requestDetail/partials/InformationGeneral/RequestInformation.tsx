import InformationSection from "@/components/pages/projects/project-details/partials/project-information/partials/InformationSection";
import { RequestInformation as TypeData } from "@/models/Requests/Requests";

import React from "react";

interface Props {
  data: TypeData;
}
const RequestInformation = ({ data }: Props) => {
  const renderTextPriority = (
    priority: string
  ): { text: string; color: string } => {
    switch (priority) {
      case "High":
        return { text: "Urgente", color: "bg-red-500 text-white" };
      case "Medium":
        return { text: "Medio", color: "bg-blue-500 text-white" };
      case "Low":
        return { text: "Baja", color: "bg-gray-400 text-black" };
      default:
        break;
    }
  };
  return (
    <div className="flex flex-1 flex-col gap-7">
      <div className="flex gap-3">
        {data && <InformationSection title="Titulo" value={data.name} />}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex gap-1 flex-1">
          <InformationSection
            title="Prioridad"
            value={renderTextPriority(data.priority).text}
            gap="gap-1"
          />
        </div>
        <div className="flex gap-1 flex-1">
          <InformationSection
            title="Creado por"
            value={data.createdByUser}
            gap="gap-1"
          />
        </div>
      </div>
      <div className="flex gap-1 flex-1">
        <InformationSection title="Proyecto" value={data.project} gap="gap-1" />
      </div>
      <div className="flex flex-1">
        <InformationSection title="Tipo" value={data.type} gap="gap-1" />
      </div>
      <div className="flex gap-1 flex-1 max-h-20 overflow-y-auto pr-2">
        <InformationSection
          title="Descipción"
          value={data.description}
          gap="gap-1"
        />
      </div>
    </div>
  );
};

export default RequestInformation;
