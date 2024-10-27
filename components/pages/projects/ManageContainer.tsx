"use client";

import {
  EnumEndpoints,
  getProjectsById,
} from "@/services/projects/projectService";
import useSWR from "swr";
import ProjectDetail from "./project-details/ProjectDetail";

interface Props {
  id?: string;
}

const ManageContainer = ({ id }: Props) => {
  const {
    data: project,
    isLoading: loading,
    mutate,
  } = useSWR([EnumEndpoints.GetProjectById, id], () => getProjectsById(+id));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-10">
      {project && <ProjectDetail project={project} mutateProject={mutate} />}
    </section>
  );
};

export default ManageContainer;
