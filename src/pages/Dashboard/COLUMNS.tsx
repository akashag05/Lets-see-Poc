import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

export const COLOUMNS = [
    {
        Header: 'SiteName',
        accessor: 'emp_id'
    },
    {
        Header: 'CPE 1',
        accessor: 'first_name'
    },
    {
        Header: 'CPE 2',
        accessor: 'last_name'
    },
    {
        Header: 'Last Update',
        accessor: 'job_profile'
    },
    // {
    //     Header: 'Action',
    //     accessor: '',
    //     Cell: ({ cell }) => (

    //         <div className='flex gap-2'>
    //             <button className='hover:text-blue-500 text-xl'>
    //                 <Link href={"/Profile/Profile?empId=" + cell.row.values.emp_id}>
    //                     <AiFillEye />
    //                 </Link>
    //             </button>
    //             <button className='hover:text-yellow-400 text-xl'>
    //                 <Link href={"/Profile/Profile?empId=" + cell.row.values.emp_id}>
    //                     <BiPencil />
    //                 </Link>
    //             </button>
    //         </div>
    //     )
    // }
]