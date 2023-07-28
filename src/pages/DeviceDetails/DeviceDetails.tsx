import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsRouterFill } from "react-icons/bs";
import Navbar from "@/components/Navbar/navbar";
import CpuUtilozation from "../CpuUtilization/CpuUtilization";
import Picker from "@/components/Picker/Picker";
import { SwitchLabel } from "@/components/Toggle/Toggle";
import Interface from "@/components/Interface/Interface";

const DeviceDetail = () => {
  const data = [
    {
      label: "CPU",
      value: "cpu",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Memory",
      value: "memory",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Interface",
      value: "interface",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div>
      <Navbar />
      <Link href="/Dashboard/Dashboard">
        <div className="m-2">
          <Button color="blue">Dashboard</Button>
        </div>
      </Link>
      <div className="flex flex-col justify-start px-4">
        <div className="flex w-fit h-fit rounded-xl p-4 m-4 border border-slate-900 font-bold text-xl bg-[#527ba1] text-white">
          <div className="">
            <FaBuildingColumns />
          </div>
          <p className="ml-2">091JUB12311432</p>
        </div>
        <div className="ml-8">
          <div className="flex w-fit h-fit rounded-xl p-2 m-4 border border-slate-900 text-l bg-red-500 text-white">
            <BsRouterFill />
            <p className="ml-2">JUB-IND-0783732-01</p>
          </div>
          <div className="flex w-fit h-fit rounded-xl p-2 m-4 border border-slate-900 text-l bg-[#10b981] text-white">
            <BsRouterFill />
            <p className="ml-2">JUB-IND-0783732-02</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-4">
        <Picker />
        <div className="ml-4">
          <SwitchLabel />
        </div>
      </div>
      <div className="p-4">
        <Tabs value="cpu" orientation="vertical">
          <TabsHeader className="w-32">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="h-20">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {/* {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="py-0">
                {desc}
              </TabPanel>
            ))} */}
            <TabPanel key="cpu" value="cpu">
              <CpuUtilozation />
            </TabPanel>
            <TabPanel key="memory" value="memory">
              memory
            </TabPanel>
            <TabPanel key="interface" value="interface">
              <Interface />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default DeviceDetail;
