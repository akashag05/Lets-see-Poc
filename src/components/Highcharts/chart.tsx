import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { HighchartsReact } from "highcharts-react-official";
import { cpuUtilization } from "@/api/cpuUtilization";
import { memoryUtilization } from "@/api/memoryUtilization";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);

export const Chart: React.FC = (props: any) => {
  const bodyData = {
    gte: "2023-07-17T00:00:00",
    lte: "2023-07-27T23:59:59",
    device: "CGB-CH-THUN-326-RDS-R-1",
  };
  let response;
  useEffect(() => {
    const fetchChartData = async () => {
      response = await cpuUtilization(bodyData);
      // setReguData(response);
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
              text: "% rate",
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
              data: response,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div>
      <figure className="highcharts-figure my-4">
        <div id={"container" + props.graphID} />
      </figure>
    </div>
  );
};

export const MemoryChart = (props: any) => {
  const bodyData = {
    gte: "2023-07-17T00:00:00",
    lte: "2023-07-27T23:59:59",
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
    console.log("data", data);
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
      text: `${props.kpiName} Utilization (%)`,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      { name: "Total Memory", data: generateDummyData() },
      { name: "Used Memory", data: generateDummyData() },
      { name: "Free Memory", data: generateDummyData() },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
