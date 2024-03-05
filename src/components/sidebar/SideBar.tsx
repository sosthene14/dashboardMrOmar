import { useState } from "react";
import { Vacation } from "./Vacation";
import { PersonelInformations } from "./PersonelInformations";
import { Others } from "./Others";
import { Contrat } from "./Contrat";
import { FaArrowRight } from "react-icons/fa";

export const SideBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const SideView = () => {
    return (
      <>
        <Vacation />
        <Contrat />
        <PersonelInformations />
        <Others />
      </>
    );
  };
  return (
    <>
      <div className="sidebar hidden text-slate-500 dark:text-slate-400 dark:bg-slate-800 bg-white p-5  w-[35%] lg:w-[20%]  xl:flex flex-col gap-[5vh] ">
        <SideView />
      </div>
      <div
        onClick={() => setOpen(!isOpen)}
        className="absolute cursor-grab bg-[#eaebed] xl:hidden p-3 z-20 rounded-e-md left-0 top-1/2 transform -translate-y-1/2"
      >
        <FaArrowRight color="gray" />
      </div>
      {isOpen ? (
        <div className="sidebar text-slate-500 dark:text-slate-400 left-0 absolute z-10 xl:hidden bg-white dark:bg-slate-800 p-10  w-[45%] lg:w-[20%] md:w-[30%]  flex flex-col gap-[5vh] ">
          <SideView />
        </div>
      ) : null}
    </>
  );
};
