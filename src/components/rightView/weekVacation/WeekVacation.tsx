import { MdOutlineCalendarMonth } from "react-icons/md";
import MonthDropDown from "../weekList/DropDownMonth";
import YearDropDown from "../weekList/DropDownYear";
import { Calendar } from "./Calendar";
export const WeekVacation = () => {

  return (
    <div className="bg-white  dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg p-5 border-blue-400 mb-10 mt-5 border-solid">
      <div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-2">
            <div className="bg-[#eaebed] p-2 flex justify-center items-center rounded-full w-[1em] h-[1em]">
              <MdOutlineCalendarMonth color="black" />
            </div>
            <p className="text-sm font-[500] ">Congés de la semaines</p>
          </div>
          <div className="flex gap-3">
            <MonthDropDown  />
            <YearDropDown />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
      </div>
      <Calendar />
    </div>
  );
};
