import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Table from "@/components/Table/table";
import MOCK_DATA from './MOCK_DATA.json';
import { COLOUMNS } from './COLUMNS'
import Card from "@/components/Card/card";

const Dashboard = () => {
  const orgData = MOCK_DATA;
  return (
    <div>
      <Navbar />
      <div className="container p-5">
      {orgData.map((name, i) => (  
          <Card key={i}/>  
        ))}  
        <Table COLOUMNS={COLOUMNS} tableData={MOCK_DATA} />
      </div>
    </div>
  );
};

export default Dashboard;
