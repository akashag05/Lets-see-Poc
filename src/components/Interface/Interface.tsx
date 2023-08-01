import React from "react";
import Table from "../Table/table";
import { interfaceColoumns } from "@/pages/data coloumns/COLUMNS";
import MOCK_DATA from "./MOCK_DATA.json";
import PieChart from "../Highcharts/pieChart";
import { Modal } from "../Modal/Modal";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Interface() {
  return (
    <div className="ml-12">
      <Table COLOUMNS={interfaceColoumns} tableData={MOCK_DATA}></Table>
    </div>
  );
}

export default Interface;
