import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import getDayOfWeek from "../../utils/getDayOfWeek";

interface HandleProps {
  dataKey: { key: number; type: string };
}

export const Calendar: React.FC<HandleProps> = ({ dataKey }) => {
  const [dayList, setDayList] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay: any = dayList.slice(startIndex, endIndex);
  const totalPages: any = Math.ceil(dayList.length / itemsPerPage);
  const [monthSelectedIndex, setMonthSelectedIndex] = useState<number>(0);
  const [yearsSelectedIndex, setYearsSelectedIndex] = useState<number>(0);
  const yearsList = [2020, 2021, 2022, 2023, 2024];
  let selectedYear = 2024

  useEffect(() => {
    console.log(dataKey);
    if (dataKey) {
      if (dataKey.type === "Mois") {
        setMonthSelectedIndex(parseInt(String(dataKey.key), 10));
      } else if (dataKey.type === "Année") {
        setYearsSelectedIndex(parseInt(String(dataKey.key), 10));
      }
    }
  }, [dataKey]);


  const getNumOfDays = (y: number, m: number) => {
    const numOfDays = new Date(y, m, 0).getDate();
    const daysArray = Array.from(
      { length: numOfDays },
      (_, index) => index + 1
    );
    setDayList(daysArray);
    console.log(daysArray);
  };

  useEffect(() => {
    getNumOfDays(2023, 1);
  }, []);
  const CalendarDays = () => {
    return (
      <>
        {dataToDisplay.map((day: number, index: number) => (
          <div
            key={index}
            className={`border-solid hover:bg-slate-200 cursor-pointer border-[1px] rounded-lg border-gray-200 w-[90%] md:w-[13%] h-[80px] ${
              getDayOfWeek.getDayOfWeek(
                selectedYear,
                monthSelectedIndex,
                day
              ) === "samedi" ||
              getDayOfWeek.getDayOfWeek(
                selectedYear,
                monthSelectedIndex,
                day
              ) === "dimanche"
                ? "bg-slate-400"
                : "bg-slate-50"
            }`}
          ></div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="flex ml-3 md:block md:ml-0 justify-center">
        <div className="flex justify-center">
          <div className="flex w-[100%] text-center text-sm mt-10 flex-col items-center md:flex-row  justify-between ">
            {dataToDisplay.map((day: number, index: number) => {
              return (
                <div key={index} className="w-[90%] md:w-[13%] ">
                  <p>
                    {getDayOfWeek.getDayOfWeek(
                      selectedYear,
                      monthSelectedIndex,
                      day
                    )}
                    , {day}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex mt-10 flex-col items-center md:flex-row  justify-center gap-2 w-full">
          <CalendarDays />
        </div>
        <div className="flex mt-10 flex-col items-center md:flex-row justify-center gap-2 w-full">
          <CalendarDays />
        </div>
      </div>
      <div>
        <div className="flex justify-start mt-5">
          <button
            className="border-none bg-transparent"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            <div className="bg-[#f3f3f3] cursor-pointer p-1 flex justify-center items-center rounded-full w-[1em] h-[1em]">
              <FaArrowLeft color={page === 1 ? "gray" : "black"} size={10} />
            </div>
          </button>
          {totalPages}
          <button
            className="border-none bg-transparent"
            onClick={() =>
              setPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={endIndex >= dayList.length}
          >
            <div className="bg-[#eaebed] cursor-pointer p-1 flex justify-center items-center rounded-full w-[1em] h-[1em]">
              <FaArrowRight
                color={endIndex >= dayList.length ? "gray" : "black"}
                size={10}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
