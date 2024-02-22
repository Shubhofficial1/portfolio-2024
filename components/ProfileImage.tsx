import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex justify-center rounded-full object-contain relative border-solid border-[5px] border-white-500 shadow-lg  ">
      <Image
        alt="Shubham Kumar"
        src={"https://avatars.githubusercontent.com/u/49878127?v=4"}
        height={150}
        width={150}
        className="rounded-full select-none cursor-not-allowed "
      />
      <span className=" bg-white w-7 h-7 flex items-center justify-center rounded-full absolute bottom-3 right-1 cursor-pointer select-none">
        ⭐
      </span>
    </div>
  );
};

export default ProfileImage;
