import { skills } from "@/lib/skills";

const Skills = () => {
  return (
    <>
      <div className="w-full  mt-[150px] mb-[60px] ">
        <h1 className="font-bold text-[2rem] tracking-wide capitalize">
          Skills ⭐
        </h1>
        <p className="font-semibold text-l  g  text-slate-500 capitalize my-4  line-clamp-2 max-w-[900px]">
          Through my studies, I've gained a solid understanding of computer
          science and web development concepts, and have dedicated a lot of my
          free time to apply these concepts to real-world scenarios and
          applications.
        </p>
      </div>

      <div className="w-full h-fit flex items-center mb-[50px]">
        <div className="max-w-[1200px] flex flex-col md:flex-row md:flex-wrap gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-5 py-3 bg-gradient-to-r from-indigo-400 to-indigo-500 cursor-pointer hover:scale-110 rounded-lg "
            >
              <h1 className="font-bold text-md leading-5 tracking-wide">
                {skill.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
