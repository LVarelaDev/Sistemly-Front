import dynamic from "next/dynamic";

const ProjectComponentLoader = dynamic(
  () => import("../../pages/projects/ManagerContainerTable"),
  {
    loading: () => <p className="text-xl font-bold text-white">Loading...</p>,
  }
);

export default ProjectComponentLoader;
