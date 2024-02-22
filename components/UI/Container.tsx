"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] w-[90vw] min-h-screen mx-auto p-5">
      {children}
    </div>
  );
};

export default Container;
