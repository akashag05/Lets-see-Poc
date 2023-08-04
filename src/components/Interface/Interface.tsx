import React, { useEffect, useLayoutEffect } from 'react'
import Table from '../Table/table'
import { interfaceColoumns } from '@/pages/data coloumns/COLUMNS'
import MOCK_DATA from './MOCK_DATA.json'
import { interfaceData } from '@/api/interface'
import { useAppContext } from '../appContext'
import moment from "moment";

function Interface(props:any) {
    const {time, toggleTime} = useAppContext()
    let [response, setResponse] = React.useState(MOCK_DATA);
    
    useEffect(() => {
        const currentTime = moment();
        const bodyData = {
            lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
            gte: time,
            device: props.device,
        };
        const fetchChartData = async () => {
            interfaceData(bodyData).then((data) => setResponse(data));
        }
        fetchChartData();
    }, [props.device, time])

    return (
        <div className='ml-14'>
            <Table COLOUMNS={interfaceColoumns} tableData={response.data}></Table>
        </div>
    )
}

export default Interface;
