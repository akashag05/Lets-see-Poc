import React, { useEffect, useState } from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";


function PieChartComponent (props:any) {
  const options = {
    chart: {
      type: "pie"
    },
    title: {
      text: "interface"
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "",
        color: "#006600",
        lineWidth: 1,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3,
          states: {
            hover: {
              enabled: true,
              lineWidth: 1
            }
          }
        },
        data: [
          {
            name: 'incoming',
            y: 9,
            sliced: false
          },
          {
            name: 'outgoing',
            y: 7,
            sliced: false
          }
        ]
      }
    ]
  };
  return (
    <div>
      <PieChart highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChartComponent;
