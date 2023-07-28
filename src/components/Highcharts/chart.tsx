import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const chart = () => {
  const data = [
    [1689865857, 30.72], // [timestamp, value]
    [1689952257, 34.85],
    [1690038657, 45.89],
    [1690125057, 88.95],
    [1690211457, 87.105],
    [1690297857, 67.123],
    [1690387857, 76.678],
    [1690474257, 65.786],
    [1690517457, 88.975],
    // [1538951402876, 71.23],
    // [1538951402976, 71.87],
    // Add more data points as needed
  ];

  const options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "Zoomable Time Series Chart",
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        name: "Dummy Data",
        data: data,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default chart;
