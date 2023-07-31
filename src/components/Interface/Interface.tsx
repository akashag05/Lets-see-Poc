import React from 'react'
import Table from '../Table/table'
import {interfaceColoumns} from '@/pages/data coloumns/COLUMNS'
import MOCK_DATA from './MOCK_DATA.json'

function Interface() {
  return (
    <div>
        <Table COLOUMNS={interfaceColoumns} tableData={MOCK_DATA}></Table>
    </div>
  )
}

export default Interface