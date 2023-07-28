import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

export const COLOUMNS = [
    {
        Header: 'Sr No',
        accessor: 'sr_no'
    },
    {
        Header: 'Site Name',
        accessor: 'sites_name'
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'CPE 1',
        accessor: 'CPE1'
    },
    {
        Header: 'CPE 2',
        accessor: 'CPE2'
    },
    {
        Header: 'Last Updated',
        accessor: 'timestamp'
    }
]