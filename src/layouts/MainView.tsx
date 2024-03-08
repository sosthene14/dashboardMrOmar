import NavBar from "./NavBar";
import Constants from "../constants/Constants";
import { VacationWeeks } from "../components/mainViewComponent/VacationWeeks";
import { VacationList } from "../components/mainViewComponent/VacationList";
import { Salutation } from "../components/mainViewComponent/Salutation";
export const MainView = () => {
  return (
    <div className="mr-0 px-5 xl:mr-10 xl:px-0">
      <NavBar data={Constants.linkData} />
      <div className="hidden lg:block">
        <Salutation />
      </div>
      <VacationWeeks />
      <VacationList />
    </div>
  );
};
