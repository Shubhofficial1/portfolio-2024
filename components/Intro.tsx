import React from "react";
import ProfileImage from "./ProfileImage";
import Introduction from "./Introduction";
import ActionButtons from "./ActionButtons";
import Divider from "./UI/Divider";

const Intro = () => {
  return (
    <section className="flex flex-col items-center ">
      <ProfileImage />
      <Introduction />
      <ActionButtons />
      <Divider />
    </section>
  );
};

export default Intro;
