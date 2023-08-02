import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Table from "@/components/Table/table";
// import MOCK_DATA from './MOCK_DATA.json';
import { COLOUMNS } from "../data coloumns/COLUMNS";
import Card from "@/components/Card/card";
import DeviceCard from "@/components/Card/DeviceCard";

const Dashboard = () => {
  // const orgDatas = MOCK_DATA;
  // const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTabletData = async () => {
      try {
        const response = await fetch("http://95.217.191.79:8000/allDevices");
        const data = await response.json();
        console.log("Dashboard Table", data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTabletData();
  }, []);

  // const handleCardClick = (i: any) => {
  //   setIndex(i);
  // };

  return (
    <div>
      <Navbar />
      <div className="p-5 w-full">
        {/* <div className="flex gap-4 mb-4">
          {orgDatas.map((orgData, i) => (
            <span key={i}  onClick={() => setIndex(i)}>
            <Card title={orgData} i={i} currentIndex={index} />
            </span>
            ))}
          </div> */}
        <Table COLOUMNS={COLOUMNS} tableData={data} />
      </div>
    </div>
  );
};

export default Dashboard;
