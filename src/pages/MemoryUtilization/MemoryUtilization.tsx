import React from "react";
import { ChartTable } from "@/components/Table/ChartTable";
import Chart from "@/components/Highcharts/chart";

const MemoryUtilization = () => {
  return (
    <>
      <div className="p-10">
        <Chart graphID='memory'/>
        <ChartTable />
      </div>
    </>
  );
};

export default MemoryUtilization;
