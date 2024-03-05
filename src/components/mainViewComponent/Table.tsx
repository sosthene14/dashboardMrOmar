import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React from 'react';

interface TableData{
  data : {name:string; startingDate:string|Date; endingDate:string|Date; status:string; style:string}[]
}

const TableComponent:React.FC<TableData> = ({data}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const [dataVacation, setDataVacation] = useState<any>([])
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    data?.length > 0 && setDataVacation(data);
  }, [data]);


  const dataToDisplay: any = dataVacation.slice(startIndex, endIndex);
  const totalPages: any = Math.ceil(dataVacation.length / itemsPerPage);
  const [pageCount, setPageCount] = useState<number[]>([]);

  const handleTotalPages = () => {
    const daysArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    setPageCount(daysArray);
  };
  useEffect(() => {
    handleTotalPages();
  }, [dataVacation]);

  return (
    <div className="container mx-auto mt-8 text-sm border-spacing-0 font-[500]">
      <table className="min-w-full bg-white rounded-lg border-spacing-0 ">
        <thead>
          <tr className="mt-10 py-10">
            <th className="py-2 px-4 border-b text-left">Intitulé</th>
            <th className="py-2 px-4 border-b">Date de début</th>
            <th className="py-2 px-4 border-b">Date de fin</th>
            <th className="py-2 px-4 border-b text-right">Etat</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((item: any, index: number) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#f4f9f5]" : " bg-white"
              } cursor-pointer hover:rounded-lg   hover:bg-gray-200`}
            >
              <td className="py-2 px-4 border-none rounded-l-lg text-[#a0a4a7]">
                {item.name}
              </td>
              <td className="py-2 px-4 border-none text-center text-[#a0a4a7]">
                {item.startingDate}
              </td>
              <td className="py-2 px-4 border-none text-center  text-[#a0a4a7]">
                {item.endingDate}
              </td>
              <td
                className={`px-4 border-none rounded-r-lg flex justify-end  text-${item.style}`}
              >
                <p
                  className={`bg-${item.style} py-1 w-auto text-center px-2  rounded-xl`}
                >
                  {item.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" hidden bg-error bg-warning text-error text-warning"></div>
      <div className="flex justify-between mt-5 items-center">
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
          <div className="flex gap-1">
            {pageCount
              .filter((item, index, array) => array.indexOf(item) === index)
              .map((item, index) => (
                <p
                  onClick={() => setPage(item)}
                  className={`${
                    page === item
                      ? "bg-[#00b477] text-white"
                      : "bg-[#f3f3f3] text-gray-400"
                  }  text-sm cursor-pointer  p-1 rounded-full flex justify-center items-center w-[1em] h-[1em]`}
                  key={index}
                >
                  {item}
                </p>
              ))}
          </div>
          <button
            className="border-none bg-transparent"
            onClick={() =>
              setPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={endIndex >= dataVacation.length}
          >
            <div className="bg-[#eaebed] cursor-pointer p-1 flex justify-center items-center rounded-full w-[1em] h-[1em]">
              <FaArrowRight
                color={endIndex >= dataVacation.length ? "gray" : "black"}
                size={10}
              />
            </div>
          </button>
        </div>
        <div>
          <button className="bg-[#00b477] hover:bg-[#1a8b65] transition-all duration-75 text-white rounded-md px-5 cursor-pointer border-none">
            <p className="text-sm font-[500] ">Saisir des congés</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
