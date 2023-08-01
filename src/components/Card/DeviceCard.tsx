import React from "react";
import { BsRouterFill } from "react-icons/bs";

const DeviceCard = () => {
  return (
    <div className="flex border-2 border-black rounded-xl  w-fit h-12 p-2 m-2 cursor-pointer">
      {/* <h1>CPE : </h1> */}
      <div className="p-2">
        <BsRouterFill />
      </div>
      <h3 className="text-[#04cd04]"> CGB-CH-VIS-G-EAS-03-R-1</h3>
    </div>
  );
};

export default DeviceCard;
