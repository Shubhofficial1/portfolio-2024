import { projectData } from "@/lib/projectData";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProjectGrid = () => {
  return (
    <>
      <div className="w-full mt-[100px]  mb-[80px] ">
        <h1 className="font-bold text-[2rem] tracking-wide capitalize">
          What I've Been Working On 💼
        </h1>
        <p className="font-semibold text-l  g  text-slate-500 capitalize my-4  line-clamp-2 max-w-[900px]">
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications and bootathon I've dedicated my time
          to. I like to stay busy and always have a project in the works. Take a
          look at some of the applications and bootathon I've dedicated my time
          to.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {projectData.map((project) => (
          <div
            key={project._id}
            className="flex flex-col justify-start transition cursor-pointer  hover:scale-[1.01]  "
          >
            <div className="relative w-full h-[300px] rounded-lg bg-slate-500  ">
              {/* <Image
                src={project.primaryImage}
                fill={true}
                alt={project.title}
                className="overflow-hidden object-cover rounded-lg"
              /> */}
            </div>
            <h1 className="font-bold text-md capitalize mt-5 ">
              {project.title}
            </h1>
            <p className="font-semibold text-sm  text-slate-500 capitalize my-2 line-clamp-2">
              {project.description}
            </p>
            <button className="w-fit py-2 shadow-md mt-2 rounded-md hover:underline underline-offset-[6px] flex items-center gap-1 mb-2">
              <h1 className="uppercase ">View Project</h1>
              <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
