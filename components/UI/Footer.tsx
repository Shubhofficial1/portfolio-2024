import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center mt-[100px] mb-[30px]">
      <div className="max-w-[1400px] w-full h-[1px] bg-slate-900/[0.4] my-4"></div>
      <h1 className="font-medium text-sm text-slate-600 mt-2">
        &#169; 2024 | All Rights Reserved.
      </h1>
      <p className="font-light text-[12px] text-slate-500 mt-3 ">
        Developed With 💓 by Shubham Kumar
      </p>
    </footer>
  );
};

export default Footer;
