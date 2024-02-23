import { LuDownload } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import Button from "./UI/Button";

const ActionButtons = () => {
  return (
    <div className="w-full mt-[10px] flex flex-col items-center md:justify-center md:flex-row  gap-5">
      <Button>
        <h1 className="text-white text-lg font-bold tracking-tight">
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
    </div>
  );
};

export default ActionButtons;
