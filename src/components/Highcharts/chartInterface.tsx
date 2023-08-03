import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { HighchartsReact } from "highcharts-react-official";
import { cpuUtilization } from "@/api/cpuUtilization";
import { memoryUtilization } from "@/api/memoryUtilization";
import { useAppContext } from "../appContext";
import moment from "moment";
// HighchartsExporting(Highcharts);
// HighchartsExportData(Highcharts);
// HighchartsAccessibility(Highcharts);


export const ChartInterface = (props: any) => {
  const currentTime = moment();
  const {time, toggleTime} = useAppContext()
  const bodyData = {
    lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
    gte: time,
    device: "CGB-CH-THUN-326-RDS-R-1",
  };
  let response: any;
  useEffect(() => {
    const getData = async () => {
      response = await memoryUtilization(bodyData);
      console.log("api response in memory", response);
    };
    getData();
  }, []);

  const generateDummyData = () => {
    const data = [];
    const startTime = new Date("2023-07-20T00:00:00").getTime();
    for (let i = 0; i < 100; i++) {
      const time = startTime + i * 60 * 60 * 100;
      const value1 = Math.random() * 100;
      const value2 = Math.random() * 50;
      const value3 = Math.random() * 75;
      data.push([time, value1, value2, value3]);
    }
    // console.log("data", data);
    return data;
  };

  Highcharts.setOptions({
    credits: {
      enabled: false,
    },
  });

  const options = {
    chart: {
      type: "spline",
      zoomType: "x", // Enable zooming along the x-axis (time)
    },
    title: {
      text: `${props.interfaceName}`,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Mbps",
      },
    },
    series: [
      { name: "Incoming", data: generateDummyData() },
      { name: "Outgoing", data: generateDummyData() },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export const ChartInterfaceError = (props: any) => {
  const currentTime = moment();
  const {time, toggleTime} = useAppContext()
  const bodyData = {
    lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
    gte: time,
    device: "CGB-CH-THUN-326-RDS-R-1",
  };
  let response: any;
  useEffect(() => {
    const getData = async () => {
      response = await memoryUtilization(bodyData);
      console.log("api response in memory", response);
    };
    getData();
  }, []);

  const generateDummyData = () => {
    const data = [];
    const startTime = new Date("2023-07-20T00:00:00").getTime();
    for (let i = 0; i < 100; i++) {
      const time = startTime + i * 60 * 60 * 100;
      const value1 = Math.random() * 100;
      const value2 = Math.random() * 50;
      const value3 = Math.random() * 75;
      data.push([time, value1, value2, value3]);
    }
    // console.log("data", data);
    return data;
  };

  Highcharts.setOptions({
    credits: {
      enabled: false,
    },
  });

  const options = {
    chart: {
      type: "spline",
      zoomType: "x", // Enable zooming along the x-axis (time)
    },
    title: {
      text: `${props.interfaceName}`,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: props.yValue
      },
    },
    series: [
      { name: "Incoming Error", data: generateDummyData() },
      { name: "Outgoing Error", data: generateDummyData() },
      { name: "Outgoing Discard", data: generateDummyData() },
      { name: "Outgoing Discard", data: generateDummyData() },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
