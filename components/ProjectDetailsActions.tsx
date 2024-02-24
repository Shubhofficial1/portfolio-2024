import Link from "next/link";

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

interface ProjectDetailsActionsProps {
  project: Project;
}

const ProjectDetailsActions: React.FC<ProjectDetailsActionsProps> = ({
  project,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[50px]  gap-5 ">
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl text-slate-600 my-3">Type</h1>
        <p className="font-medium text-md text-slate-400">{project.type}</p>
      </div>
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl text-slate-600 my-3">Tech Stack</h1>
        {project.techStack.map((stack) => (
          <p key={stack} className="font-medium text-md text-slate-400 my-[6px]  ">
            {stack}
          </p>
        ))}
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-xl text-slate-600 my-3">Code</h1>
        <p className="font-medium text-md text-indigo-400 hover:underline underline-offset-4">
          <Link href={`${project.githubLink}`} target="_blank">
            Repository
          </Link>
        </p>
      </div>
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl text-slate-600 my-3">Live Site</h1>
        <p className="font-medium text-md text-indigo-400 hover:underline underline-offset-4">
          <Link href={`${project.deployedLink}`} target="_blank">
            Site
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailsActions;
