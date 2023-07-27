import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Table from "@/components/Table/table";
import MOCK_DATA from './MOCK_DATA.json';
import { COLOUMNS } from './COLUMNS'
import Card from "@/components/Card/card";

const Dashboard = () => {
  const orgDatas = MOCK_DATA;
  const [index, setIndex] = useState(0);
  const data = useRef(index);

  useEffect(() => {
    data.current = index;
  }, [index, orgDatas]);

  return (
    <div>
      <Navbar />
      <div className="p-5 w-full">
        {orgDatas.map((orgData, i) => (
          <div ref={data} key={i} onClick={() => setIndex(i)}>
            <Card title={orgData} index={i} />
          </div>
        ))}
        <Table COLOUMNS={COLOUMNS} tableData={orgDatas[data].org.data} />
      </div>
    </div>
  );
};

export default Dashboard;
