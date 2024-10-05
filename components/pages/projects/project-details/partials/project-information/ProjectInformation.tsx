import { ProjectDto } from "@/models/projects/projectDto";
import React from "react";
import InformationSection from "./partials/InformationSection";
import { statusColorResolver } from "@/utils/helpers/statusColorResolver";
import { Chip } from "@nextui-org/react";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { formatDate } from "@/utils/helpers/formatDate";

interface Props {
  project: ProjectDto;
}
const ProjectInformation = ({ project }: Props) => {
  const renderStatusChip = (value: string) => {
    const colorResolver = statusColorResolver(value);
    return <Chip color={colorResolver.color}>{colorResolver.value}</Chip>;
  };
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex justify-between items-center">
        <InformationSection
          title="Cliente"
          value={project.client.companyName ?? "Sin información"}
        />
        {renderStatusChip(project.status)}
      </div>
      <InformationSection
        title="Presupuesto"
        value={convertToCOP(project.budget)}
      />
      <InformationSection
        title="Fecha inicial"
        value={formatDate(project.initDate)}
      />
      <InformationSection
        title="Fecha finalización"
        value={formatDate(project.finishDate)}
      />
      {project.description && (
        <InformationSection
          title="Descipción"
          direction="flex-col"
          value={project.description}
        />
      )}
    </div>
  );
};

export default ProjectInformation;
