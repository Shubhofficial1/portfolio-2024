import React from "react";
import BreadCrumb from "./UI/BreadCrumb";

interface Lesson {
  title: string;
  description: string;
  image: string;
}

interface Project {
  _id: number;
  title: string;
  description: string;
  href: string;
  type: string;
  techStack: string[];
  githubLink: string;
  deployedLink: string;
  primaryImage: string;
  lessons: Lesson[];
}

interface ProjectHeadingProps {
  project: Project;
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({ project }) => {
  const breadcrumbPaths = [
    { label: "Home", link: "/" },
    { label: "Project", link: "/project" },
  ];

  return (
    <>
      <BreadCrumb paths={breadcrumbPaths} />
      <h1 className="font-bold text-4xl mt-10 mb-5 tracking-wide">
        {project?.title}
      </h1>
      <p className="font-medium text-md my-4 max-w-[700px] text-slate-500 line-clamp-4">
        {project?.description}
      </p>
    </>
  );
};

export default ProjectHeading;
