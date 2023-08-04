import { Card, Typography } from "@material-tailwind/react";
import React, { useMemo, useState } from "react";

const TABLE_HEAD_CPU = ["Minimum", "Maximum", "Average", "Unit of Measure"];
const TABLE_HEAD_MEMORY = ["Memory", "Minimum", "Maximum", "Average", "Unit of Measure"];


export function ChartTable(props: any) {
  return (
    <Card className="h-full w-full">
      <h2>Calculated Data from Chart</h2>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_CPU.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {props.tableData.map((item : any, index) => ( */}
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.min}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.max}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.avg}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                %
              </Typography>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </Card>
  );
}

export function MemoryChartTable(props: any) {
  // console.log(props)
  return (
    <Card className="h-full w-full">
      <h2>Calculated Data from Chart</h2>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_MEMORY.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Free
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.minFree}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.maxFree}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.avgFree}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                bytes
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Used
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.minUsed}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.maxUsed}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {props.avgUsed}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                bytes
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

export function InterfaceChartTable(props: any) {
  const TABLE_HEAD_INTERFACE = ["Indices", "Minimum", "Maximum", "Average", "Unit of Measure"];
  const TABLE_ROWS_INTERFACE = [
    {
      indice: "Incoming",
      min: props.data ? (props.data.incoming_min/Math.pow(1000,props.length)).toFixed(2) : '-',
      max: props.data ? (props.data.incoming_max/Math.pow(1000,props.length)).toFixed(2) : '-',
      avg: props.data ? (props.data.incoming_avg/Math.pow(1000,props.length)).toFixed(2) : '-',
      um: props.unit,
    },
    {
      indice: "Outgoing",
      min: props.data ? (props.data.outgoing_min/Math.pow(1000,props.length)).toFixed(2) : '-',
      max: props.data ? (props.data.outgoing_max/Math.pow(1000,props.length)).toFixed(2) : '-',
      avg: props.data ? (props.data.outgoing_avg/Math.pow(1000,props.length)).toFixed(2) : '-',
      um: props.unit,
    },
    {
      indice: "Incoming Error",
      min: props.data ? props.data.incoming_errors_min : '-',
      max: props.data ? props.data.incoming_errors_max : '-',
      avg: props.data ? props.data.incoming_errors_avg : '-',
      um: "Count",
    },
    {
      indice: "Outgoing Error",
      min: props.data ? props.data.outgoing_errors_min : '-',
      max: props.data ? props.data.outgoing_errors_max : '-',
      avg: props.data ? props.data.outgoing_errors_avg : '-',
      um: "Count",
    },
    {
      indice: "Incoming Discard",
      min: props.data ? props.data.incoming_errors_discard_min : '-',
      max: props.data ? props.data.incoming_errors_discard_max : '-',
      avg: props.data ? props.data.incoming_errors_discard_avg : '-',
      um: "Count",
    },
    {
      indice: "Outgoing Discard",
      min: props.data ? props.data.outgoing_errors_discard_min : '-',
      max: props.data ? props.data.outgoing_errors_discard_max : '-',
      avg: props.data ? props.data.outgoing_errors_discard_avg : '-',
      um: "Count",
    },
  ];
  return (
    <div className="h-auto w-full">
      <h2>Calculated Data from Chart</h2>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_INTERFACE.map((head, i) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  <div>
                    {head}
                  </div>
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS_INTERFACE.map(({ indice, min, max, avg, um }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {indice}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {min}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {max}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {avg}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {um}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

