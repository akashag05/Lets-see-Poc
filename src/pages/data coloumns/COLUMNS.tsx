import Link from "next/link";

export const COLOUMNS = [
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

export const interfaceColoumns = [
    {
        Header: 'Sr No',
        accessor: 'sr_no'
    },
    {
        Header: 'Interface Name',
        accessor: 'interface_name'
    },
    {
        Header: 'Incoming',
        accessor: 'interface_in',
        Cell: (props: { row: any, value: string }) => {
            return (
                <div>
                    <div>{props.value}</div>
                    <div>Discard - {props.row.original.interface_in_discard}</div>
                    <div>Errors - {props.row.original.interface_in_errors}</div>
                </div>
            );
        },
    },
    {
        Header: 'Outgoing',
        accessor: 'interface_out',
        Cell: (props: { row: any, value: string }) => {
            return (
                <div>
                    <div>{props.value}</div>
                    <div>Discard - {props.row.original.interface_out_discard}</div>
                    <div>Errors - {props.row.original.interface_out_errors}</div>
                </div>
            );
        },
    }
]