import { useState, useRef } from "react";
import { Vacation } from "../sidebarComponents/Vacation";
import { PersonelInformations } from "../sidebarComponents/PersonelInformations";
import { Others } from "../sidebarComponents/Others";
import { Contrat } from "../sidebarComponents/Contrat";
import { FaArrowRight } from "react-icons/fa";
import Constants from "../../constants/Constants";
import useClickOutside from "../hooks/useClickOutside";

export const SideBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const buttonToClick = useRef(null);
  const divToHide = useRef(null);
  useClickOutside({
    divToHide: divToHide,
    buttonToClick: buttonToClick,
    setOpen,
  });
  const SideView = () => {
    return (
      <>
        <Vacation data={Constants.vacationData} />
        <Contrat data={Constants.contratData} />
        <PersonelInformations data={Constants.personnelData} />
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
        ref={buttonToClick}
        onClick={() => setOpen(!isOpen)}
        className="absolute cursor-grab bg-[#eaebed] xl:hidden p-3 z-20 rounded-e-md left-0 top-1/2 transform -translate-y-1/2"
      >
        <FaArrowRight color="gray" />
      </div>
      {isOpen && (
        <div
          ref={divToHide}
          className="sidebar text-slate-500 dark:text-slate-400 left-0 absolute z-10 xl:hidden bg-white dark:bg-slate-800 p-10  w-[45%] lg:w-[20%] md:w-[30%]  flex flex-col gap-[5vh] "
        >
          <SideView />
        </div>
      )}
    </>
  );
};
