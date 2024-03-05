import NavBar from "./NavBar"
import { Salutation } from "./Salutation"
import { WeekList } from "./weekList/WeekList"
import { WeekVacation } from "./weekVacation/WeekVacation"
export const RightView = () => {
  return (
    <div className="mr-0 px-5 xl:mr-10 xl:px-0">
      <NavBar />
      <div className="hidden lg:block">
            <Salutation />
      </div>
  
      <WeekVacation />
      <WeekList />
    </div>
  )
}
