import React, { useEffect, useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import Link from "next/link";

let length = 0;
const units = [
  "bytes",
  "Kbps",
  "Mbps",
  "Gbps",
  "Tbps",
  "Pbps",
  "Ebps",
  "Zbps",
  "Ybps",
];

export const COLOUMNS_OLD = [
  {
    Header: "Sr No",
    accessor: "sr_no",
  },
  {
    Header: "Site Name",
    accessor: "sites_name",
    Cell: (props: { cell: any; value: string }) => {
      return <Link href="/DeviceDetails/DeviceDetails">{props.value}</Link>;
    },
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "CPE 1",
    accessor: "CPE1",
    Cell: (props: { cell: any; value: string }) => {
      if (
        props.cell.row.original.CPE1_Status == "up" ||
        props.cell.row.original.CPE1_Status == 1
      ) {
        return <span className="device-up">{props.value}</span>;
      } else if (
        props.cell.row.original.CPE1_Status == "down" ||
        props.cell.row.original.CPE1_Status == 0
      ) {
        return <span className="device-down">{props.value}</span>;
      }
    },
  },
  {
    Header: "CPE 2",
    accessor: "CPE2",
    Cell: (props: { cell: any; value: string }) => {
      if (
        props.cell.row.original.CPE2_Status == "up" ||
        props.cell.row.original.CPE2_Status == 1
      ) {
        return <span className="device-up">{props.value}</span>;
      } else if (
        props.cell.row.original.CPE2_Status == "down" ||
        props.cell.row.original.CPE2_Status == 0
      ) {
        return <span className="device-down">{props.value}</span>;
      }
    },
  },
  {
    Header: "Last Updated",
    accessor: "timestamp",
  },
];

export const COLOUMNS = [
  {
    Header: "Site Name",
    accessor: "site_name",
    Cell: (props: { cell: any; value: string }) => {
      return (
        <Link
          href={`/DeviceDetails/DeviceDetails?service_id=${props.cell.row.original.service_id}&site_name=${props.cell.row.original.site_name}&device=${props.cell.row.original.device_name}`}
        >
          {props.value}
        </Link>
      );
    },
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Service Id",
    accessor: "service_id",
  },
  {
    Header: "Device",
    accessor: "device_name",
  },
];

export const interfaceColoumns = [
  {
    Header: "Interface Name",
    accessor: "interface",
    Cell: (props: { row: any; value: string }) => {
      const [modalOpen, setModalOpen] = React.useState("");

      return (
        <>
          <Modal
            title={"Interface - " + props.value}
            interfaceName={props.value}
            ModalOpen={modalOpen}
            setModalOpen={setModalOpen}
            value={props.row.original}
            unit={units[length]}
            length={length}
          />
          <div
            className="underline cursor-pointer"
            onClick={() => setModalOpen("xl")}
          >
            {props.value}
          </div>
        </>
      );
    },
  },
  {
    Header: () => {
      return (
        <>
          <div>In Traffic</div>
          <small>avg ({units[length]})</small>
        </>
      );
    },
    accessor: "average_incoming",
    Cell: (props: { row: any; value: string }) => {
      function niceBytes(x: any) {
        let l = length,
          n = parseInt(x, 10) || 0;
        if (!length) {
          while (n >= 1000 && ++l) {
            n = n / 1000;
          }
        } else {
          for (let i = 0; i < length; i++) {
            n = n / 1000;
          }
          while (n >= 1000 && ++l) {
            n = n / 1000;
          }
        }
        length = Math.max(l, length);

        return n.toFixed(2);
        // return (n.toFixed(n < 10 && l > 0 ? 1 : 0));
      }
      let val = niceBytes(props.value);
      return (
        <>
          <div>{val || (val != "0" ? "-" : "0")}</div>
        </>
      );
    },
  },
  {
    Header: () => {
      return (
        <>
          <div>Out Traffic</div>
          <small>avg ({units[length]})</small>
        </>
      );
    },
    accessor: "average_outgoing",
    Cell: (props: { row: any; value: string }) => {
      function niceBytes(x: any) {
        let l = length,
          n = parseInt(x, 10) || 0;
        if (!length) {
          while (n >= 1000 && ++l) {
            n = n / 1000;
          }
        } else {
          for (let i = 0; i < length; i++) {
            n = n / 1000;
          }
          while (n >= 1000 && ++l) {
            n = n / 1000;
          }
        }

        length = Math.max(l, length);

        return n.toFixed(2);
        // return (n.toFixed(n < 10 && l > 0 ? 1 : 0));
      }
      let val = niceBytes(props.value);
      return (
        <>
          <div>{val || (val != "0" ? "-" : "0")}</div>
        </>
      );
    },
  },
  {
    Header: "In Errors",
    accessor: "average_incoming_errors",
    Cell: (props: { row: any; value: string }) => {
      return (
        <>
          <div>{props.value || (props.value != "0" ? "-" : "0")}</div>
        </>
      );
    },
  },
  {
    Header: "Out Errors",
    accessor: "average_outgoing_errors",
    Cell: (props: { row: any; value: string }) => {
      return (
        <>
          <div>{props.value || (props.value != "0" ? "-" : "0")}</div>
        </>
      );
    },
  },
  {
    Header: "In Discard",
    accessor: "average_incoming_discards",
    Cell: (props: { row: any; value: string }) => {
      return (
        <>
          <div>{props.value || (props.value != "0" ? "-" : "0")}</div>
        </>
      );
    },
  },
  {
    Header: "Out Discard",
    accessor: "average_outgoing_discards",
    Cell: (props: { row: any; value: string }) => {
      return (
        <>
          <div>{props.value || (props.value != "0" ? "-" : "0")}</div>
        </>
      );
    },
  },
  // {
  //     Header: 'avg rate' /sec min max in headers
  // }
];
