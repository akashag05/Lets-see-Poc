import React, { useEffect } from "react";
import Highcharts from "highcharts";
// import HighchartsExporting from "highcharts/modules/exporting";
// import HighchartsExportData from "highcharts/modules/export-data";
// import HighchartsAccessibility from "highcharts/modules/accessibility";
// import { HighchartsReact } from "highcharts-react-official";
// import { cpuUtilization } from "@/api/cpuUtilization";
// import { memoryUtilization } from "@/api/memoryUtilization";
import { useAppContext } from "../appContext";
import moment from "moment";
import { interfaceGraphData } from "@/api/interface";
// HighchartsExporting(Highcharts);
// HighchartsExportData(Highcharts);
// HighchartsAccessibility(Highcharts);


export const ChartInterface = (props: any) => {
  const { time, toggleTime } = useAppContext()
  const [data, setData] = React.useState()
  let response: any;
  useEffect(() => {
    // console.log("interface -",props.interfaceSelect)
    const currentTime = moment();
    const bodyData = {
      lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
      gte: time,
      device: props.deviceName,
      interface: props.interfaceName
    };
    const getData = async () => {
      response = await interfaceGraphData(bodyData);
      // console.log(response);
      setData(response);
      try {
        if (response) {
          // console.log('response - ', response)

          Highcharts.chart("container-" + props.deviceName + "-" + props.interfaceName, {
            chart: {
              type: "spline",
              zoomType: "x", // Enable zooming along the x-axis (time)
            },
            title: {
              text: `${props.graphTitle}`,
            },
            xAxis: {
              type: "category",
            },
            yAxis: {
              title: {
                text: props.unit,
              },
            },
            legend: {
              enabled: true,
            },
            tooltip: {
              valueDecimals: 2
            },
            series: [
              {
                name: "Incoming",
                data: response.incoming.map((data, i) => {
                  return [new Date(data[0]).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' }), ((data[1] / Math.pow(1000, props.length)))]
                })
              },
              {
                name: "Outgoing", data: response.outgoing.map((data, i) => {
                  return [new Date(data[0]).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' }), (data[1] / Math.pow(1000, props.length))]
                })
              },
            ],
            credits: {
              enabled: false,
            },
          })
        }
        else {
          Highcharts.chart("container-" + props.deviceName + "-" + props.interfaceName, {
            chart: {
              type: "spline",
              zoomType: "x", // Enable zooming along the x-axis (time)
            },
            title: {
              text: `No data for this time period`,
            },
            xAxis: {
              type: "datetime",
            },
            yAxis: {
              title: {
                text: "Mbps",
              },
            },
            legend: {
              enabled: true,
            },
            series: [
              { name: "Incoming", data: [] },
              { name: "Outgoing", data: [] },
            ],
            credits: {
              enabled: false,
            },
          })
        }
      } catch (error) {
        // Highcharts.chart("container-" + props.deviceName + "-" + props.interfaceName, {
        //   chart: {
        //     type: "spline",
        //     zoomType: "x", // Enable zooming along the x-axis (time)
        //   },
        //   title: {
        //     text: `${props.graphTitle}`,
        //   },
        //   xAxis: {
        //     type: "datetime",
        //   },
        //   yAxis: {
        //     title: {
        //       text: "Mbps",
        //     },
        //   },
        //   legend: {
        //     enabled: true,
        //   },
        //   series: [
        //     { name: "Incoming", data: [] },
        //     { name: "Outgoing", data: [] },
        //   ],
        //   credits: {
        //     enabled: false,
        //   },
        // })
        // Highcharts.setOptions({ lang: { noData: "Your custom message" } })
        console.error(error)
      }
    };
    getData();
  }, [props.deviceName, props.interfaceName, time, props.interfaceSelect]);

  return (
    <figure className="highcharts-figure my-4">
      <div id={"container-" + props.deviceName + "-" + props.interfaceName} />
    </figure>
  );
};

export const ChartInterfaceError = (props: any) => {
  const { time, toggleTime } = useAppContext()
  const [data, setData] = React.useState()
  let response: any;
  useEffect(() => {
    const currentTime = moment();
    const bodyData = {
      lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
      gte: time,
      device: props.deviceName,
      interface: props.interfaceName
    };
    const getData = async () => {
      response = await interfaceGraphData(bodyData);
      setData(response);
      try {
        if (response) {

          Highcharts.chart("container-" + props.deviceName + "-" + props.interfaceName, {
            chart: {
              type: "spline",
              zoomType: "x", // Enable zooming along the x-axis (time)
            },
            title: {
              text: `${props.graphTitle}`,
            },
            xAxis: {
              type: "category",
            },
            yAxis: {
              title: {
                text: "Mbps",
              },
            },
            tooltip: {
              valueDecimals: 2
            },
            legend: {
              enabled: true,
            },
            series: [
              { name: "Incoming Errors", data: response.incoming_errors.map((data, i) => {
                return [new Date(data[0]).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' }), data[1]]
              }) },
              { name: "Outgoing Errors", data: response.outgoing_errors.map((data, i) => {
                return [new Date(data[0]).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' }), data[1]]
              }) },
              { name: "Incoming Discards", data: response.incoming_errors_discard.map((data, i) => {
                return [new Date(data[0]).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' }), data[1]]
              }) },
              { name: "Outgoing Discards", data: response.outgoing_errors_discard.map((data, i) => {
                return [new Date(data[0]).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' }), data[1]]
              }) },
            ],
            credits: {
              enabled: false,
            },
          })
        }
        else {
          Highcharts.chart("container-" + props.deviceName + "-" + props.interfaceName, {
            chart: {
              type: "spline",
              zoomType: "x", // Enable zooming along the x-axis (time)
            },
            title: {
              text: `No data for this time period`,
            },
            xAxis: {
              type: "datetime",
            },
            yAxis: {
              title: {
                text: "Mbps",
              },
            },
            legend: {
              enabled: true,
            },
            series: [
              { name: "Incoming Errors", data: [] },
              { name: "Outgoing Errors", data: [] },
              { name: "Incoming Discards", data: [] },
              { name: "Outgoing Discards", data: [] },
            ],
            credits: {
              enabled: false,
            },
          })
        }
      } catch (error) {
        // Highcharts.chart("container-" + props.deviceName + "-" + props.interfaceName, {
        //   chart: {
        //     type: "spline",
        //     zoomType: "x", // Enable zooming along the x-axis (time)
        //   },
        //   title: {
        //     text: `${props.graphTitle}`,
        //   },
        //   xAxis: {
        //     type: "datetime",
        //   },
        //   yAxis: {
        //     title: {
        //       text: "Mbps",
        //     },
        //   },
        //   legend: {
        //     enabled: true,
        //   },
        //   series: [
        //     { name: "Incoming Errors", data: [] },
        //     { name: "Outgoing Errors", data: [] },
        //     { name: "Incoming Discards", data: [] },
        //     { name: "Outgoing Discards", data: [] },
        //   ],
        //   credits: {
        //     enabled: false,
        //   },
        // })
        // Highcharts.setOptions({ lang: { noData: "Your custom message" } })
        console.error(error)
      }
    };
    getData();
  }, [props.deviceName, props.interfaceName, time, props.interfaceSelect]);

  // console.log(props.data)
  // if (props.data) {

  return (
    <figure className="highcharts-figure my-4">
      <div id={"container-" + props.deviceName + "-" + props.interfaceName} />
    </figure>
  );
};
