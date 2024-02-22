import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import Button from "./UI/Button";

const ActionButtons = () => {
  return (
    <div className="w-full mt-[10px] flex flex-col items-center md:justify-center md:flex-row  gap-5 ">
      <Button>
        <h1 className=" text-white text-lg font-bold tracking-tight">
          Contact Me
        </h1>
        <CiMail size={20} />
      </Button>

      <Button bgColor="bg-indigo-500">
        <h1 className="text-white text-lg font-bold tracking-tight">
          Download CV
        </h1>
        <LuDownload size={20} />
      </Button>

      <div className="flex flex-col gap-3 md:flex-row  md:ml-5">
        <button className="z-10 rounded-full p-4 flex items-center justify-center bg-slate-800 hover:bg-slate-700 hover:scale-105">
          <FaLinkedin size={20} />
        </button>

        <button className="z-10 rounded-full p-4 flex items-center justify-center bg-slate-800 hover:bg-slate-700 hover:scale-105 ">
          <FaGithub size={20} />
        </button>

        <button className="z-10 rounded-full p-4 flex items-center justify-center bg-slate-800 hover:bg-slate-700 hover:scale-105">
          <FaTwitter size={20} />
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
