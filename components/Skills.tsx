import { skills } from "@/lib/skills";

const Skills = () => {
  return (
    <>
      <div className="w-full text-center mt-[100px]">
        <h1 className="font-bold text-[2rem] tracking-wide capitalize">
          Skills
        </h1>
      </div>

      <div className="w-full h-fit flex items-center justify-center my-[50px]">
        <div className="max-w-[600px] flex flex-col md:flex-row md:flex-wrap justify-center  gap-4">
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
