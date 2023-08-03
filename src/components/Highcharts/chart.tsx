import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { HighchartsReact } from "highcharts-react-official";
import moment from "moment";
import { cpuUtilization } from "@/api/cpuUtilization";
import { memoryUtilization } from "@/api/memoryUtilization";
import { ChartTable, MemoryChartTable } from "../Table/ChartTable";
import { useAppContext } from "../appContext";

// HighchartsExporting(Highcharts);
// HighchartsExportData(Highcharts);
// HighchartsAccessibility(Highcharts);

export const Chart: React.FC = (props: any) => {
  const [responseData, setResponseData] = React.useState({});
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [avg, setAvg] = React.useState(0);
  const {time, toggleTime} = useAppContext()
  // console.log("time in chart", props.gteTime);
  const currentTime = moment();
  const bodyData = {
    "lte": currentTime.format("YYYY-MM-DDTHH:mm:ss"),
    "gte": time,
    "device": props.device,
  };

  let response;
  useEffect(() => {
    const fetchChartData = async () => {
      response = await cpuUtilization(bodyData);
      // setResponseData(response);
      // console.log("API response for CPU - "+ props.device, response);
      try {
        setMin(response.min);
        setMax(response.max);
        setAvg(response.avg);
        Highcharts.chart("container" + props.graphID, {
          chart: {
            zoomType: "x",
            events: {
              load: function () {
                const chart = this;
                const logoWidth = 20;
                const logoHeight = 20;
                const logoX = chart.plotLeft - 60;
                const logoY = chart.plotTop - 60;

                // chart.renderer
                //   .text(
                //     "RevDau Industries Pvt. Ltd",
                //     logoX + logoWidth + 10,
                //     logoY + 15
                //   )
                //   .css({
                //     color: "#666",
                //     fontSize: "14px",
                //     fontWeight: "bold",
                //   })
                //   .add();
                // chart.renderer
                //   .text(
                //     "Created By RevDau Industries Pvt. Ltd.",
                //     250,
                //     chart.plotTop + chart.plotHeight + 40
                //   )
                //   .css({
                //     color: "#666",
                //     fontSize: "12px",
                //   })
                //   .add();
              },
            },
          },
          title: {
            text: `${props.kpiName} Utilization (%)`,
            // align: "top",
            // y: 40,
          },
          xAxis: {
            type: "datetime",
          },
          yAxis: {
            title: {
              text: "Percentage (%)",
            },
          },
          legend: {
            enabled: true,
          },
          plotOptions: {
            area: {
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                },
                stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [
                    1,
                    Highcharts.color(Highcharts.getOptions().colors[0])
                      .setOpacity(0)
                      .get("rgba"),
                  ],
                ],
              },
              marker: {
                radius: 2,
              },
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 1,
                },
              },
              threshold: null,
            },
          },
          series: [
            {
              type: "area",
              name: `${props.kpiName} 1`,
              data: response?.data,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [bodyData, props.device]);
  

  // console.log("response data in state", responseData);
  return (
    <div>
      <figure className="highcharts-figure my-4">
        <div id={"container" + props.graphID} />
      </figure>
      <ChartTable min={min} max={max} avg={avg} />
    </div>
  );
};

export const MemoryChart = (props: any) => {
  const [minFree, setMinFree] = React.useState(0);
  const [maxFree, setMaxFree] = React.useState(0);
  const [avgFree, setAvgFree] = React.useState(0);
  const [minUsed, setMinUsed] = React.useState(0);
  const [maxUsed, setMaxUsed] = React.useState(0);
  const [avgUsed, setAvgUsed] = React.useState(0);
  const {time, toggleTime} = useAppContext()
  const currentTime = moment();
  const bodyData = {
    lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
    gte: time,
    device: props.device,
  };
  let data;
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        data = await memoryUtilization(bodyData);
        // const data = await response.json();
        // console.log("memory data", data);
        setMinFree(data.min_free_memory);
        setMaxFree(data.max_free_memory);
        setAvgFree(data.avg_free);
        setMinUsed(data.min_used_memory);
        setMaxUsed(data.max_used_memory);
        setAvgUsed(data.avg_used);
        // console.log(data)
        Highcharts.chart("container", {
          chart: {
            zoomType: "x",
            // ... rest of your chart configuration ...
          },
          title: {
            text: "Memory Utilization (%)",
            // align: "left",
            y: 40,
          },
          xAxis: {
            type: "datetime",
          },
          yAxis: {
            title: {
              text: "bytes",
            },
          },
          legend: {
            enabled: true,
          },
          plotOptions: {
            area: {
              // ... rest of your plot options ...
            },
          },
          series: [
            {
              type: "area",
              name: "Used Memory",
              data: data?.data.map((point) => [point[0], point[1]]),
            },
            {
              type: "line",
              name: "Free Memory",
              data: data?.data.map((point) => [point[0], point[2]]), // Sample conversion rate (EUR to GBP)
            },
            {
              type: "line",
              name: "Total Memory",
              data: data?.data.map((point) => [point[0], point[3]]), // Sample conversion rate (USD to GBP)
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [bodyData, props.device]);

  // console.log(min)

  return (
    <div>
      <figure className="highcharts-figure">
        <div id="container" />
      </figure>
      <MemoryChartTable minUsed={minUsed} maxUsed={maxUsed} avgUsed={avgUsed} minFree={minFree} maxFree={maxFree} avgFree={avgFree}/>
    </div>
  );
};
