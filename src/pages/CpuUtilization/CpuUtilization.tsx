import Chart from "@/components/Highcharts/chart";
import Picker from "@/components/Picker/Picker";
import { SwitchLabel } from "@/components/Toggle/Toggle";
import React from "react";

const CpuUtilozation = () => {
  return (
    <>
      <div className="p-10">
        <Chart />
      </div>
    </>
  );
};

export default CpuUtilozation;
