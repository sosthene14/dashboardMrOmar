import { MdOutlineCalendarMonth } from "react-icons/md";
import TableCompnent from "./Table";
import MonthDropDown from "./DropDownMonth";
import YearDropDown from "./DropDownYear";
export const WeekList = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 text-slate-500 dark:text-slate-400">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#eaebed] p-2 flex justify-center items-center rounded-full w-[1em] h-[1em]">
              <MdOutlineCalendarMonth color="black" />
            </div>
            <p className="text-sm font-[500]">Liste des congés</p>
          </div>
          <div className="flex gap-3">
            <MonthDropDown />
            <YearDropDown />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
      </div>
      <TableCompnent />
    </div>
  );
};
