import { MdOutlineCalendarMonth } from "react-icons/md";
import TableCompnent from "./Table";
import CustomDropdown from "../custom/CustomDropDown";
import Constants from "../../constants/Constants";
export const VacationList = () => {
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
            <CustomDropdown dataTypeName="Mois" arrayOfData={Constants.monthsList} dataNames={Constants.monthNames} />
            <CustomDropdown dataTypeName="Année" arrayOfData={Constants.yearsList} dataNames={Constants.yearsNames} />

          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
      </div>
      <TableCompnent data={Constants.dataVacation} />
    </div>
  );
};
