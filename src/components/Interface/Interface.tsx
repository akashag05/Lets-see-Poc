import React, { useEffect, useLayoutEffect } from 'react'
import Table from '../Table/table'
import { interfaceColoumns } from '@/pages/data coloumns/COLUMNS'
import MOCK_DATA from './MOCK_DATA.json'
import PieChart from '../Highcharts/pieChart'
import { Modal } from '../Modal/Modal'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { interfaceData } from '@/api/interface'

function Interface() {

    const bodyData = {
        gte: "2023-07-17T00:00:00",
        lte: "2023-07-27T23:59:59",
        device: "CGB-CH-THUN-326-RDS-R-1",
    };
    let [response, setResponse] = React.useState(MOCK_DATA);

    useEffect(() => {
        const fetchChartData = async () => {
            interfaceData(bodyData).then((data) => setResponse(data));
        }
        fetchChartData();
    }, [])
    
    // setResponse(val)
    // useEffect(() => {
    //     return
    // }, [response])


    return (
        <Table COLOUMNS={interfaceColoumns} tableData={response.data}></Table>
    )
}

export default Interface;
