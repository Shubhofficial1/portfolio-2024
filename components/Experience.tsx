import { experiences } from "@/lib/experiences";

const Experience = () => {
  return (
    <>
      <div className="w-full mt-[100px] ">
        <h1 className="font-bold text-[2rem] tracking-wide capitalize">
          Experience 💻
        </h1>
        <p className="font-semibold text-l  g  text-slate-500 capitalize my-4  line-clamp-2 max-w-[900px]">
          Through my it experiences, I've gained a solid understanding of
          computer science and web development concepts, and have dedicated a
          lot of my free time to apply these concepts to real-world scenarios
          and applications.
        </p>
      </div>
      <div className="w-full ">
        {experiences.map((experience) => (
          <>
            <div className="max-w-xl bg-white shadow-md rounded-md overflow-hidden my-8">
              {/* Company Details */}
              <div className="px-4 py-2 bg-gradient-to-l from-indigo-400 to-indigo-500">
                <h2 className="text-xl font-bold">{experience.company}</h2>
                <p className="text-sm ">
                  {experience.joinedOn.format("MMMM YYYY")} -{" "}
                  {experience.currentlyWorking
                    ? "Present"
                    : experience?.leftOn?.format("MMMM YYYY")}
                </p>
                <p className="text-sm">{experience.workLocation}</p>
              </div>
              {/* Project Details */}
              <div className="px-4 py-2 ">
                {experience.projects.map((project, index) => (
                  <div key={index} className="mb-5 ">
                    <h3 className="text-lg font-semibold text-gray-800 ">
                      {project.projectName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {project.startedOn.format("MMM YYYY")} -{" "}
                      {project.completedOn
                        ? project.completedOn.format("MMM YYYY")
                        : "Present"}{" "}
                    </p>
                    <p className="text-sm text-gray-600">{project.role}</p>
                    <p className="text-sm text-gray-600">{project.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Experience;
