import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Table from "@/components/Table/table";
import MOCK_DATA from './MOCK_DATA.json';
import { COLOUMNS } from './COLUMNS'
import Card from "@/components/Card/card";

const Dashboard = () => {
  const orgDatas = MOCK_DATA;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(orgDatas[index].org.data);

  useEffect(() => {
    setData(orgDatas[index].org.data);
  }, [index, orgDatas]);

  const handleCardClick = (i: any) => {
    setIndex(i);
  };

  return (
    <div>
      <Navbar />
      <div className="p-5 w-full">
        <div className="flex gap-4 mb-4" >
          {orgDatas.map((orgData, i) => (
            <Card key={1} title={orgData} i={i} currentIndex={index} />
          ))}
        </div>
        <Table COLOUMNS={COLOUMNS} tableData={data} />
      </div>
    </div>
  );
};

export default Dashboard;