import { CustomGrid, CustomGridColumn } from "@/components/ui/Table/FTable";
import { PaginatorResponse } from "@/models/PaginatorResponse";
import { ProjectDto } from "@/models/projects/projectDto";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { formatDate } from "@/utils/helpers/formatDate";
import { statusColorResolver } from "@/utils/helpers/statusColorResolver";
import { Chip } from "@nextui-org/react";

interface Props {
  data?: PaginatorResponse<ProjectDto>;
}

const TableProject = ({ data }: Props) => {
  const renderStatusChip = (value: string) => {
    const colorResolver = statusColorResolver(value);

    return <Chip color={colorResolver.color}>{colorResolver.value}</Chip>;
  };

  return (
    <CustomGrid<ProjectDto> dataList={data?.dataList ?? []} keyIdentifier="id">
      <CustomGridColumn<ProjectDto>
        labelHeader="Nombre"
        colRender={(_, project) => project.name}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Cliente"
        colRender={(_, project) =>
          project?.client?.companyName ?? "no hay registro"
        }
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Empresa"
        colRender={(_, project) =>
          project?.company?.companyName ?? "no hay registro"
        }
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Presupuesto"
        colRender={(_, project) => convertToCOP(project.budget)}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Estado"
        colRender={(_, project) => renderStatusChip(project.status ?? "")}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Fecha inicio"
        colRender={(_, project) => formatDate(project.initDate)}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Fecha fin"
        colRender={(_, project) => formatDate(project.finishDate)}
      />
    </CustomGrid>
  );
};

export default TableProject;
