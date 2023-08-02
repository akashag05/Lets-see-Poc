import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Minimum", "Maximum", "Average", "Unit of Measure"];

const TABLE_ROWS = [
  {
    min: "54",
    max: "109",
    avg: "34",
    um: "%",
  },
];

const TABLE_HEAD_USAGE = [
  "Indices",
  "Minimum",
  "Maximum",
  "Average",
  "Unit of Measure",
];

const TABLE_ROWS_USAGE = [
  {
    indice: "Incoming",
    min: "54",
    max: "109",
    avg: "34",
    um: "Mbps",
  },
  {
    indice: "Outgoing",
    min: "20",
    max: "80",
    avg: "50",
    um: "Mbps",
  },
];

const TABLE_ROWS_Error = [
  {
    indice: "Incoming Error",
    min: "54",
    max: "109",
    avg: "34",
    um: "Count",
  },
  {
    indice: "Outgoing Error",
    min: "20",
    max: "80",
    avg: "50",
    um: "Count",
  },
  {
    indice: "Incoming Discard",
    min: "54",
    max: "109",
    avg: "34",
    um: "Count",
  },
  {
    indice: "Outgoing Discard",
    min: "20",
    max: "80",
    avg: "50",
    um: "Count",
  },
];

export function ChartTable(props: any) {
  console.log("propsdata in table", props.min);
  return (
    <Card className="h-full w-full">
      <h2>Calculated Data from Chart</h2>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
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
                {/* {props.tableData.max} */}
              </Typography>
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {/* {props.tableData.avg} */}
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

export function UsageChartTable() {
  return (
    <div className="h-auto w-full">
      <h2>Calculated Data from Chart</h2>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_USAGE.map((head) => (
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
          {TABLE_ROWS_USAGE.map(({ indice, min, max, avg, um }, index) => (
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

export function ErrorDiscardChartTable() {
  return (
    <div className="h-auto w-full">
      <h2>Calculated Data from Chart</h2>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_USAGE.map((head) => (
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
          {TABLE_ROWS_Error.map(({ indice, min, max, avg, um }, index) => (
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
