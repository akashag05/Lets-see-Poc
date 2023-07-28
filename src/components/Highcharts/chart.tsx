import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { ChartTable } from "../Table/ChartTable";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);

const Chart: React.FC = () => {
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json"
        );
        const data = await response.json();

        Highcharts.chart("container", {
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
            text: "USD to EUR exchange rate over time",
            align: "left",
            y: 40,
          },
          subtitle: {
            text:
              document.ontouchstart === undefined
                ? "Click and drag in the plot area to zoom in"
                : "Pinch the chart to zoom in",
            align: "left",
            y: 60,
          },
          xAxis: {
            type: "datetime",
          },
          yAxis: {
            title: {
              text: "Exchange rate",
            },
          },
          legend: {
            enabled: false,
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
              name: "USD to EUR",
              data: data,
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
        <div id="container" />
      </figure>
      <ChartTable />
    </div>
  );
};

export default Chart;
