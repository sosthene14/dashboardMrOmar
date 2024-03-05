export const PersonelInformations = () => {
  const data: any = [
    {
      title: "Prénom",
      value: "Abdoulaye",
    },
    {
      title: "Nom",
      value: "Omar",
    },
    {
      title: "Fonction",
      value: "Analyste développeur",
    },
  ];

  return (
    <div>
      <p className="text-transform: uppercase mb-8 text-sm text-[#a0a4a7] font-[500] ">Infos. personnelles</p>
      <div >
        {data.map((item: any, index: number) => (
          <div key={index} className="flex justify-between -mt-5">
            <p className="font-[500] text-sm">{item.title}</p>
            <p className="text-sm font-[500] text-[#a0a4a7] ">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
