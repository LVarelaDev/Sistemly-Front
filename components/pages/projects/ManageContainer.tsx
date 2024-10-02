"use client";

import { useEffect, useState } from "react";
import { getProjectsById } from "@/services/projects/projectService";
import ProjectForm from "./partials/ProjectForm";

interface Props {
  id?: string;
}

const ManageContainer = ({ id }: Props) => {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const fetchedProject = await getProjectsById(+id);
        if (fetchedProject) {
          setProject(fetchedProject);
        }
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-10 max-w-[50%]">
      <ProjectForm project={project} />
    </section>
  );
};

export default ManageContainer;
