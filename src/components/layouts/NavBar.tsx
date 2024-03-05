import React, { useRef, useState, useEffect } from "react";
import { MdOutlineDashboard, MdOutlineMapsHomeWork } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { GoFileDirectory } from "react-icons/go";
import { IoWalletOutline, IoHome } from "react-icons/io5";
import { ThemeToggler } from "../common/themeToogler/ThemeToggler";
import { Salutation } from "../mainViewComponent/Salutation";
import { FaArrowRight } from "react-icons/fa";
import Hamburger from "hamburger-react";
import useClickOutside from "../hooks/useClickOutside";

interface LinkData {
  data: { linkName: string; iconIndex: number; isActive: boolean }[];
}
interface ClassName {
  className: string;
}
const NavBar: React.FC<LinkData> = ({ data }) => {
  const iconColor: string = "#a0a4a7";
  const iconColorActive: string = "#00b477";
  const [isOpen, setOpen] = useState<boolean>(false);
  const [linkData, setLinkData] = useState<any>([]);

  const iconList = [
    <MdOutlineDashboard color={iconColor} />,
    <CiBank color={iconColor} />,
    <IoWalletOutline color={iconColor} />,
    <FaRegCalendarXmark color={iconColorActive} />,
    <GrNotes color={iconColor} />,
    <MdOutlineMapsHomeWork color={iconColor} />,
    <GoFileDirectory color={iconColor} />,
  ];

  let divToHide: any = useRef();
  let buttonToClick: any = useRef();
  useEffect(() => {
    data?.length > 0 && setLinkData(data);
  }, [data]);

  useClickOutside({
    divToHide: divToHide,
    buttonToClick: buttonToClick,
    setOpen,
  });

  const MapedLink: React.FC<ClassName> = ({ className }) => {
    return (
      <div className={className}>
        {linkData.map((item: any, index: number) => (
          <div key={index} className="flex gap-3 items-center">
            <div>{iconList[item.iconIndex]}</div>
            <div
              className={`text-sm  ${
                item.isActive
                  ? "text-black font-[500] dark:text-white"
                  : "text-slate-500 dark:text-slate-400"
              } font-[400] hover:cursor-pointer hover:text-black dark:hover:text-white  transition-colors delay-75`}
            >
              {item.linkName}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <div className="bg-white mt-5 dark:bg-slate-800 p-1 px-2 lg:p-3 rounded-lg flex justify-between items-center w-full ">
          <div className={`lg:flex items-center gap-5 hidden`}>
            <MapedLink className="lg:flex items-center gap-5 hidden" />
          </div>
          <div className="block lg:hidden -mt-2">
            <Salutation />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="2em"
              width="2em"
              color="#00b477"
            >
              <path
                fillRule="evenodd"
                d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
              />
            </svg>
            <p className="text-xl md:text-2xl font-[500] text-slate-500 dark:text-slate-400">
              KayFay
            </p>
          </div>
          <div className="ml-10 ">
            <div className=" absolute top-3 right-5 lg:block lg:relative lg:top-0 lg:right-0">
              <ThemeToggler />
            </div>
            <div className="block lg:hidden">
              <div
                ref={buttonToClick}
                className="hover:bg-slate-100 rounded-full transition-all duration-300 dark:hover:bg-slate-700 absolute right-[8%] -mt-6  -mr-[2%]"
                id="humbergerId"
              >
                <Hamburger toggled={isOpen} toggle={setOpen} color="#a0a4a7" />
              </div>
              <div>
                {isOpen && (
                  <div ref={divToHide}>
                    <MapedLink className="right-8 dark:bg-slate-800 mt-10 gap-5 flex flex-col z-10 absolute bg-white px-4 py-2 rounded-lg" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 lg:hidden">
        <IoHome color={"#a0a4a7"} />
        <FaArrowRight color="#a0a4a7" />
        <div className="flex items-center gap-2">
          <FaRegCalendarXmark color={iconColorActive} />
          <p className="text-sm text-slate-500 dark:text-slate-400">Abscence</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
