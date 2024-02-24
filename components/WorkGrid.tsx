"use client";

import { workData } from "@/lib/workData";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const WorkGrid = () => {
  const router = useRouter();

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
        {workData.map((work) => (
          <div
            key={work._id}
            className="flex flex-col justify-start transition cursor-pointer  hover:scale-[1.01]  "
          >
            <div
              className="relative w-full h-[300px] rounded-lg bg-slate-500  "
              onClick={() => {
                router.push(`/projects/${work._id}`);
              }}
            >
              <Image
                src={work.primaryImage}
                fill={true}
                alt={work.title}
                className="overflow-hidden object-cover rounded-lg"
              />
            </div>
            <h1 className="font-bold text-md capitalize mt-5 ">{work.title}</h1>
            <p className="font-semibold text-sm  text-slate-500 capitalize my-2 line-clamp-2">
              {work.description}
            </p>
            <button
              className="w-fit py-2 shadow-md mt-2 rounded-md hover:underline underline-offset-[6px] flex items-center gap-1 mb-2"
              onClick={() => {
                router.push(`/projects/${work._id}`);
              }}
            >
              <h1 className="uppercase ">View Project</h1>
              <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkGrid;
