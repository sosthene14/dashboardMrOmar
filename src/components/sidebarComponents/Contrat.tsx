import React, { useEffect, useState } from "react";
import images from "../../assets/images/images";

interface ContratData {
  data: Array<{ title: string; date: string }>;
}

export const Contrat: React.FC<ContratData> = ({ data }) => {
  const [contratData, setContratData] = useState<any>([]);
  useEffect(() => {
    data?.length > 0 && setContratData(data);
  }, [data]);

  return (
    <div className="bg-[#f4f9f5] rounded-lg">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-2">
          <div className="bg-[#00b477] p-[1px] rounded-sm flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              color="white"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M14 3v4a1 1 0 001 1h4" />
              <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
              <path d="M8 11h8v7H8zM8 15h8M11 11v7" />
            </svg>
          </div>
          <p className="font-[500]">Contrat</p>
        </div>

        <div className="">
          <p className="text-success font-[500] bg-success h-5 py-1  gap-1 px-2 flex rounded ">
            <img
              alt="isActiveImage"
              className="w-[.5em]"
              src={images.isActiveImage}
            />
            CDI
          </p>
        </div>
      </div>
      <div className="flex justify-between p-3 -mt-8">
        {contratData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p className="text-[#a0a4a7] text-sm">{item.title}</p>
              <p className="text-sm font-[500] -mt-2">{item.date}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 items-center bg-[#00b477] px-3 py-2 rounded-b-lg">
        <div className="bg-white p-3 flex justify-center items-center rounded-full w-[1em] h-[1em]">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            color="#00b477"
          >
            <path d="M8 1a2.5 2.5 0 012.5 2.5V4h-5v-.5A2.5 2.5 0 018 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" />
          </svg>
        </div>

        <div className="mt-4">
          <p className="text-[#4fd1a5] -mt-2 font-[500] text-sm">
            Salaire de base
          </p>
          <p className="text-white font-[500] -mt-2 text-sm">1 500 000 FCFA</p>
        </div>
      </div>
    </div>
  );
};
