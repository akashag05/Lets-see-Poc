import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="header px-2 sm:px-4 py-2.5 shadow-lg">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/Dashboard/Dashboard.page" className="flex">
                    <img src="/logo.png" width={100}/>
                    {/* <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA" /><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE" /><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2" /></svg> */}
                </Link>
                <span className="self-center text-lg font-semibold whitespace-nowrap text-white">Lets See</span>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="user-profile relative w-full md:block md:w-auto text-4xl cursor-pointer" id="mobile-menu">
                    <div className="bg-gray-200 rounded-full w-fit overflow-hidden ">
                        <FaUserCircle />
                    </div>
                    <div className="user-profile-menu py-1 absolute w-[200px] flex-col bg-white drop-shadow-lg rounded">
                        <Link href="/Login/Login" className="flex text-black text-sm pl-3">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


