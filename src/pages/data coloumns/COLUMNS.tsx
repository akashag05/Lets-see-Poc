import React, { useEffect, useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import Link from "next/link";

export const COLOUMNS_OLD = [
    {
        Header: 'Sr No',
        accessor: 'sr_no'
    },
    {
        Header: 'Site Name',
        accessor: 'sites_name',
        Cell: (props: { cell: any, value: string }) => {
            return <Link href='/DeviceDetails/DeviceDetails'>{props.value}</Link>;
        },
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'CPE 1',
        accessor: 'CPE1',
        Cell: (props: { cell: any, value: string }) => {
            if (props.cell.row.original.CPE1_Status == 'up' || props.cell.row.original.CPE1_Status == 1) {
                return <span className="device-up">{props.value}</span>;
            }
            else if (props.cell.row.original.CPE1_Status == 'down' || props.cell.row.original.CPE1_Status == 0) {
                return <span className="device-down">{props.value}</span>;
            }
        },
    },
    {
        Header: 'CPE 2',
        accessor: 'CPE2',
        Cell: (props: { cell: any, value: string }) => {
            if (props.cell.row.original.CPE2_Status == 'up' || props.cell.row.original.CPE2_Status == 1) {
                return <span className="device-up">{props.value}</span>;
            }
            else if (props.cell.row.original.CPE2_Status == 'down' || props.cell.row.original.CPE2_Status == 0) {
                return <span className="device-down">{props.value}</span>;
            }
        },
    },
    {
        Header: 'Last Updated',
        accessor: 'timestamp'
    }
]

export const COLOUMNS = [
    {
        Header: 'Site Name',
        accessor: 'site_name',
        Cell: (props: { cell: any, value: string }) => {
            return <Link href='/DeviceDetails/DeviceDetails'>{props.value}</Link>;
        },
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'Device',
        accessor: 'device'
    }
]


export const interfaceColoumns = [
    {
        Header: 'Sr No',
        accessor: 'sr_no'
    },
    {
        Header: 'Interface Name',
        accessor: 'interface_name',
        Cell: (props: { row: any, value: string }) => {
            const [modalOpen, setModalOpen] = React.useState('');
            
            return (
                <>
                    <Modal title={'Interface - '+props.value} ModalOpen={modalOpen} setModalOpen={setModalOpen} value={props.row.original}/>
                    <div className="underline cursor-pointer" onClick={() => setModalOpen('xs')}>{props.value}</div>
                </>
            );
        },
    },
    {
        Header: 'Incoming',
        accessor: 'interface_in'
    },
    {
        Header: 'Incoming Discard',
        accessor: 'interface_in_discard'
    },
    {
        Header: 'Incoming Errors',
        accessor: 'interface_in_errors'
    },
    {
        Header: 'Outgoing',
        accessor: 'interface_out'
    },
    {
        Header: 'Outgoing Discard',
        accessor: 'interface_out_discard'
    },
    {
        Header: 'Outgoing Errors',
        accessor: 'interface_out_errors'
    }
]

