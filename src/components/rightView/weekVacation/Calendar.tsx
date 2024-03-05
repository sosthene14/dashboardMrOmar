import { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const Calendar = () => {
  const [dayList, setDayList] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay: any = dayList.slice(startIndex, endIndex);
  const totalPages: any = Math.ceil(dayList.length / itemsPerPage);
  const [pageCount, setPageCount] = useState<number[]>([]);

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
  const restDay = [4, 8, 12, 5, 8];

  return (
    <div>
      <div className="flex ml-3 md:block md:ml-0 justify-center">
        <div className="flex mt-10 flex-col items-center md:flex-row flex-wrap justify-center gap-10 w-[30%] md:w-[100%]">
            <p>Lundi 01/01</p>
            <p>Mardi 02/01</p>
            <p>Mercredi 03/01</p>
            <p>Jeudi 04/01</p>
            <p>Vendredi 05/01</p>
            <p>Samedi 06/01</p>
            <p>Dimanche 07/01</p>
        </div>
        <div className="flex mt-10 flex-col items-center md:flex-row flex-wrap justify-center gap-2 w-full">
          <div style={{ writingMode: "vertical-rl",transform: 'rotate(180deg)' }}>
            Matin
          </div>
          {dataToDisplay.map((day: number, index: number) => (
            <div
              key={index}
              className={`border-solid border-[1px] rounded-lg border-gray-200 w-[90%] md:w-[13%] h-[80px] ${
                restDay.includes(day) ? " bg-slate-400" : "bg-slate-50"
              }`}
            ></div>
          ))}
        </div>
        <div className="flex mt-10 flex-col items-center md:flex-row flex-wrap justify-center gap-2 w-full">
        <div style={{ writingMode: "vertical-rl",transform: 'rotate(180deg)' }}>
            Après midi
          </div>
          {dataToDisplay.map((day: number, index: number) => (
            <div
              key={index}
              className={`border-solid border-[1px] rounded-lg border-gray-200 w-[90%] md:w-[13%] h-[80px] ${
                restDay.includes(day) ? " bg-slate-400" : "bg-slate-50"
              }`}
            ></div>
          ))}
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
