import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button, Dropdown, Flex } from "antd";


const handleMenuClick = (e: any) => {
  console.log("click", e.key);
  return getMonthName(e.key);
};

const getMonthName = (key: string) => {
  const monthMap: { [key: string]: string } = {
    "1": "Janvier",
    "2": "Fevrier",
    "3": "Mars",
    "4": "Avril",
    "5": "Mai",
    "6": "Juin",
    "7": "Juillet",
    "8": "Aout",
    "9": "Septembre",
    "10": "Octobre",
    "11": "Novembre",
    "12": "Decembre",
  };

  return monthMap[key] || "";
};

const items = [
  { label: "Janvier", key: "1" },
  { label: "Fevrier", key: "2" },
  { label: "Mars", key: "3" },
  { label: "Avril", key: "4" },
  { label: "Mai", key: "5" },
  { label: "Juin", key: "6" },
  { label: "Juillet", key: "7" },
  { label: "Aout", key: "8" },
  { label: "Septembre", key: "9" },
  { label: "Octobre", key: "10" },
  { label: "Novembre", key: "11" },
  { label: "Decembre", key: "12" },
];

const MonthDropDown = () => {
  const [selectedMonth, setSelectedMonth] = React.useState("");

  const menuProps = {
    items,
    onClick: (e: any) => {
      setSelectedMonth(handleMenuClick(e));
    },
    selectedvalue: selectedMonth,
  };

  return (
    <div>
      <Flex >
        <Dropdown menu={menuProps}>
          <Button className="bg-[#f4f9f5] justify-center  flex items-center  border-none font-[500] w-[7rem] ">
            <Flex       
              className="flex items-center justify-center text-[#3a3b3b] hover:text-[#00b477]"
            >
              {menuProps.selectedvalue || "Mois"}
              <RiArrowDropDownLine size={30} />
            </Flex>
          </Button>
        </Dropdown>
      </Flex>
    </div>
  );
};

export default MonthDropDown;
