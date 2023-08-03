import React from "react";
import { MemoryChart } from "@/components/Highcharts/chart";

const MemoryUtilization = (props: any) => {
  return (
    <>
      <div className="p-10">
        <MemoryChart
          graphID="memory"
          kpiName="Memory"
          device={props.device}
        />
      </div>
    </>
  );
};

export default MemoryUtilization;
