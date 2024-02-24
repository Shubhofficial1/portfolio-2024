import Image from "next/image";

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

interface ProjectLessonsProps {
  project: Project;
}

const ProjectLessons: React.FC<ProjectLessonsProps> = ({ project }) => {
  return (
    <div>
      {project.lessons.map((lesson, index) => (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[150px] mb-[50px] gap-x-[100px] gap-y-[50px] ">
          <div className={`${index === 1 ? "order-last" : ""}`}>
            <h1 className="font-bold text-3xl text-slate-500 mb-5 line-clamp-2">
              {project.lessons[index].title}
            </h1>
            <p className="font-semibold text-sm text-slate-500 leading-6 tracking-normal capitalize ">
              {project.lessons[index].description}
            </p>
          </div>
          <div className="relative w-full h-[350px] rounded-md bg-slate-500 cursor-pointer hover:scale-[1.02]  transition">
            <Image
              src={project.lessons[index].image}
              fill={true}
              alt={project.lessons[0].title}
              className="overflow-hidden object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLessons;