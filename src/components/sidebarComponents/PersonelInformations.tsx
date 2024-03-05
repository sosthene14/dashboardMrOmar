import React,{useState,useEffect} from "react";
interface PersonelData  {
data : Array<{title:string; title2:string}>
}
export const PersonelInformations:React.FC<PersonelData> = ({data}) => {
  const [personelData, setPersonelData] = useState<any>([]);
  useEffect(() => {
    data?.length > 0 && setPersonelData(data);
  }, [data]);


  return (
    <div>
      <p className="text-transform: uppercase mb-8 text-sm text-[#a0a4a7] font-[500] ">Infos. personnelles</p>
      <div >
        {personelData.map((item: any, index: number) => (
          <div key={index} className="flex justify-between -mt-5">
            <p className="font-[500] text-sm">{item.title}</p>
            <p className="text-sm font-[500] text-[#a0a4a7] ">{item.title2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
