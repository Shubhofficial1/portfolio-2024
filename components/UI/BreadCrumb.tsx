import Link from "next/link";
import React from "react";

interface Paths {
  label: string;
  link: string;
}

interface BreadCrumbProps {
  paths: Paths[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ paths }) => {
  return (
    <nav className="flex text-base">
      {paths &&
        paths?.map((path, index) => (
          <span key={index}>
            {index < paths.length - 1 ? (
              <div className="flex items-center">
                <Link
                  href={path?.link}
                  className="font-semibold text-sm tracking-tight text-slate-400 hover:underline capitalize"
                >
                  {path?.label}
                </Link>
                <span className="mx-2 font-semibold text-sm tracking-tight text-slate-400 capitalize">
                  /
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="font-semibold text-sm tracking-tight text-slate-500 capitalize">
                  {path?.label}
                </span>
              </div>
            )}
          </span>
        ))}
    </nav>
  );
};

export default BreadCrumb;
