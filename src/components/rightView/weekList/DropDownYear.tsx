import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button, Dropdown, Flex } from "antd";

const handleMenuClick = (e: any) => {
  return getMonthName(e.key);
};

const getMonthName = (key: string) => {
  const monthMap: { [key: string]: string } = {
    "1": "2020",
    "2": "2021",
    "3": "2022",
    "4": "2023",
    "5": "2024",
  };

  return monthMap[key] || "";
};

const items = [
  { label: "2020", key: "1" },
  { label: "2021", key: "2" },
  { label: "2022", key: "3" },
  { label: "2023", key: "4" },
  { label: "2024", key: "5" },
];

const YearDropDown = () => {
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
      <Flex>
        <Dropdown menu={menuProps} >
          <Button className="bg-[#f4f9f5] justify-center  border-none font-[500] w-[7rem] ">
            <Flex
              className="flex -mt-1 items-center justify-center text-[#3a3b3b] hover:text-[#00b477]  "
            >
              {menuProps.selectedvalue || "Année"}
              <RiArrowDropDownLine size={30} />
            </Flex>
          </Button>
        </Dropdown>
      </Flex>
    </div>
  );
};

export default YearDropDown;
