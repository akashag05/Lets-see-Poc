import React from "react";
import Chart from "@/components/Highcharts/chart";
import { ChartTable } from "@/components/Table/ChartTable";

const CpuUtilozation = () => {
  return (
    <>
      <div className="p-10">
        <Chart />
        <ChartTable />
      </div>
    </>
  );
};

export default CpuUtilozation;
