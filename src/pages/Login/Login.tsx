import Link from "next/link";
import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="">
        <Image src="/stats.svg" alt="" width={400} height={400} />
      </div>

      <div className="w-px h-3/5 bg-gray-400 mx-20"></div>

      <div className="w-1/3 max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="info@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <Link
          href="/Dashboard/Dashboard"
          className="block w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
