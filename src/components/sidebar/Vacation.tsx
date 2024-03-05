export const Vacation = () => {
  const data: any = [
    {
      title: "Solde N-1",
      amount: "16",
    },
    {
      title: "Solde",
      amount: "10",
    },
    {
      title: "Prix",
      amount: "20",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="2em"
          width="2em"
          color="#00b477"
        >
          <path
            fillRule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
          />
        </svg>
        <p className="text-2xl font-[500]">KayFay</p>
      </div>
      <p className="text-transform: uppercase text-sm text-[#a0a4a7] font-[500] text-center">
        Congés
      </p>
      <div className="flex justify-between items-center">
        {data.map((item: any, index: number) => {
          return (
            <div key={index} className="text-sm">
              <div className="flex flex-col items-center">
                <p className="text-[#a0a4a7]">{item.title}</p>
                <p className="font-[500] -mt-2">{item.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#f4f9f5] p-[6px] rounded-lg flex justify-between">
        <p className="text-[#a0a4a7]">Congés restants</p>
        <p className="font-[500]">6 jours</p>
      </div>
    </div>
  );
};
