import { getProjectsById } from "@/services/projects/projectService";
import { notFound } from "next/navigation";
import ProjectForm from "./partials/ProjectForm";

interface Props {
  id?: string;
}

const ManageContainer = async ({ id }: Props) => {
  let project = undefined;

  if (id) {
    project = await getProjectsById(+id);
    if (!project) {
      notFound();
    }
  }

  return (
    <section className="mt-10 max-w-[50%]">
      <ProjectForm project={project} />
    </section>
  );
};

export default ManageContainer;
