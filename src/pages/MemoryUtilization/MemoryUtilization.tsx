import React from "react";
import { ChartTable } from "@/components/Table/ChartTable";
import { MemoryChart } from "@/components/Highcharts/chart";

const MemoryUtilization = (props: any) => {
  return (
    <>
      <div className="p-10">
        <MemoryChart
          graphID="memory"
          kpiName="Memory"
          device={props.device}
          gteTime={props.gteTime}
        />
        {/* <ChartTable /> */}
      </div>
    </>
  );
};

export default MemoryUtilization;
