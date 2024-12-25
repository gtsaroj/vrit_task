import React from "react";
import { BiX } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { Elements } from "../Elements/Elements";

export const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <nav className="w-full fixed top-0  flex bg-[var(--light-foreground)] items-center justify-between px-2 py-3 border-b-[1px] border-[var(--border-color)] ">
      <h1 className=" text-xl ">Form Builder</h1>
      <button className=" xl:hidden flex" onClick={() => setOpen(!open)}>
        {open ? <BiX className=" size-6" /> : <RiMenu3Line className=" size-6" />}
      </button>
      <div className={` fixed ${open ? "right-0 opacity-100 visible" :"right-[-1000px] opacity-0 invisible "} duration-150 right-0 top-[3.3rem] xl:hidden flex h-full min-w-[200px]  max-w-[300px] `}>
        <Elements />
      </div>
    </nav>
  );
};
