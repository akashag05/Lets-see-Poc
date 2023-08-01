import React from "react";
import { ChartTable } from "@/components/Table/ChartTable";
import {MemoryChart} from "@/components/Highcharts/chart";

const MemoryUtilization = () => {
  return (
    <>
      <div className="p-10">
        <MemoryChart graphID="memory" kpiName="Memory" />
        <ChartTable />
      </div>
    </>
  );
};

export default MemoryUtilization;
