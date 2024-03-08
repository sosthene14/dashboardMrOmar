import { SideBar } from "../layouts/SideBar";
import { MainView } from "../layouts/MainView";

export const Home = () => {
  return (
    <div className="flex pb-10 justify-center dark:bg-slate-700 gap-10 bg-[#f4f9f5] w-full">
      <SideBar />
      <div className="w-[100%] xl:w-[80%]">
        <MainView />
      </div>
    </div>
  );
};
