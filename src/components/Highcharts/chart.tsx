import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { HighchartsReact } from "highcharts-react-official";
import moment from "moment";
import { cpuUtilization } from "@/api/cpuUtilization";
import { memoryUtilization } from "@/api/memoryUtilization";
import { ChartTable } from "../Table/ChartTable";

// HighchartsExporting(Highcharts);
// HighchartsExportData(Highcharts);
// HighchartsAccessibility(Highcharts);

export const Chart: React.FC = (props: any) => {
  const [responseData, setResponseData] = React.useState({});
  // console.log("time in chart", props.gteTime);
  const currentTime = moment();
  const bodyData = {
    lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
    gte: props.gteTime,
    device: props.device,
  };
  console.log("bodyData", bodyData);
  let response;
  useEffect(() => {
    const fetchChartData = async () => {
      response = await cpuUtilization(bodyData);
      // setResponseData(response);
      console.log("API response ", response);
      try {
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
              data: response.data,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [bodyData]);

  console.log("response data in state", responseData);
  return (
    <div>
      <figure className="highcharts-figure my-4">
        <div id={"container" + props.graphID} />
      </figure>
      <ChartTable min={responseData.min} />
    </div>
  );
};

export const MemoryChart = (props: any) => {
  const currentTime = moment();
  const bodyData = {
    lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
    gte: props.gteTime,
    device: props.device,
  };
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const data = await memoryUtilization(bodyData);
        // const data = await response.json();
        console.log("memory data", data);
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
              data: data.data.map((point) => [point[0], point[1]]),
            },
            {
              type: "line",
              name: "Free Memory",
              data: data.data.map((point) => [point[0], point[2]]), // Sample conversion rate (EUR to GBP)
            },
            {
              type: "line",
              name: "Total Memory",
              data: data.data.map((point) => [point[0], point[3]]), // Sample conversion rate (USD to GBP)
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [bodyData]);

  return (
    <div>
      <figure className="highcharts-figure">
        <div id="container" />
      </figure>
      <ChartTable />
    </div>
  );
};
