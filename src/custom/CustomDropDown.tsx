import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button, Dropdown, Flex } from "antd";

interface DataDropDown {
  arrayOfData: Array<{ label: string; key: number }>;
  dataNames: { [key: string]: string };
  dataTypeName: string;
  onDataRequest: (data: { key: number; type: string }) => void;
}

const CustomDropdown: React.FC<DataDropDown> = ({
  arrayOfData,
  dataNames,
  dataTypeName,
  onDataRequest,
}) => {
  const [selectedData, setSelectedData] = React.useState("");
  const [dataName, setDataName] = useState<any>({});
  const [items, setItems] = useState<any>([]);

  const getDataName = (key: number) => {
    return dataName[key] || "";
  };

  const handleMenuClick = (e: any) => {
    return getDataName(e.key);
  };

  useEffect(() => {
    dataNames && setDataName(dataNames);
    arrayOfData?.length > 0 && setItems(arrayOfData);
  }, [arrayOfData, dataNames]);

  useEffect(() => {
    const loadData = localStorage.getItem(dataTypeName);
    loadData ? setSelectedData(loadData) : null;
  }, []);

  const menuProps = {
    items,
    onClick: (e: any) => {
      const data = { key: e.key, type: dataTypeName };
      onDataRequest(data);
      localStorage.setItem(dataTypeName, handleMenuClick(e));
      setSelectedData(handleMenuClick(e));
    },
    selectedvalue: selectedData,
  };

  return (
    <div>
      <Flex>
        <Dropdown {...menuProps}>
          <Button className="bg-[#f4f9f5] justify-center  flex items-center  border-none font-[500] w-[7rem] ">
            <Flex className="flex items-center justify-center text-[#3a3b3b] hover:text-[#00b477]">
              {menuProps.selectedvalue || dataTypeName}
              <RiArrowDropDownLine size={30} />
            </Flex>
          </Button>
        </Dropdown>
      </Flex>
    </div>
  );
};

export default CustomDropdown;
