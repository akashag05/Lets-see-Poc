import React from "react";
import { Chart } from "@/components/Highcharts/chart";
import { ChartTable } from "@/components/Table/ChartTable";

const CpuUtilozation = (props: any) => {
  // console.log("time in cpu utilization", props.gteTime);
  return (
    <>
      <div className="p-10">
        <Chart
          graphID="cpu"
          kpiName="CPU"
          device={props.device}
          gteTime={props.gteTime}
        />
        {/* <ChartTable /> */}
      </div>
    </>
  );
};

export default CpuUtilozation;
