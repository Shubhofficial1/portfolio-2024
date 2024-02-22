"use client";
import { navLinks } from "@/lib/data";

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  return (
    <div className=" w-full fixed top-6 flex items-center justify-center ">
      <div className="backdrop-blur bg-white/5 px-3 py-2 flex gap-3 rounded-full shadow  ">
        {navLinks?.map((navLink: NavLink) => (
          <div
            key={navLink.label}
            className="rounded-full text-white bg-[#1b2b3a] px-4 py-2 hover:text-slate-200  hover:bg-slate-700 cursor-pointer line-clamp-1  "
          >
            <h1 className="font-semibold text-sm ">{navLink.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
