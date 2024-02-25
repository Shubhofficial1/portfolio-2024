"use client";

import BlurredCircle1 from "@/components/BlurredCircle1";
import ProjectDetailsActions from "@/components/ProjectDetailsActions";
import ProjectHeading from "@/components/ProjectHeading";
import ProjectLessons from "@/components/ProjectLessons";
import Container from "@/components/UI/Container";
import { workData } from "@/lib/workData";

interface ProjectDetailsProps {
  params: {
    projectId: number;
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ params }) => {
  const project = workData.filter(
    (p) => Number(p._id) === Number(params.projectId)
  );

  if (project.length === 0) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <h1>No Project Found</h1>
      </div>
    );
  }

  return (
    <div className="mt-[50px]">
      <Container>
        <BlurredCircle1/>
        <ProjectHeading project={project[0]} />
        <ProjectDetailsActions project={project[0]} />
        <ProjectLessons project={project[0]} />
      </Container>
    </div>
  );
};

export default ProjectDetails;
