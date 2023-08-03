import React, { useEffect, useLayoutEffect } from 'react'
import Table from '../Table/table'
import { interfaceColoumns } from '@/pages/data coloumns/COLUMNS'
import MOCK_DATA from './MOCK_DATA.json'
import { interfaceData } from '@/api/interface'
import { useAppContext } from '../appContext'
import moment from "moment";

function Interface() {
    const currentTime = moment();
    const {time, toggleTime} = useAppContext()
    const bodyData = {
        lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
        gte: time,
        device: "CGB-CH-ROT-RDS-R-1",
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
        <div className='ml-14'>
            <Table COLOUMNS={interfaceColoumns} tableData={response.data}></Table>
        </div>
    )
}

export default Interface;
