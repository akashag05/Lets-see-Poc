import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { BsRouterFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/navbar";
import CpuUtilozation from "../CpuUtilization/CpuUtilization";
import Picker from "@/components/Picker/Picker";
import { SwitchLabel } from "@/components/Toggle/Toggle";
import Interface from "@/components/Interface/Interface";
import MemoryUtilization from "../MemoryUtilization/MemoryUtilization";
import { BreadcrumbsWithIcon } from "@/components/BreadCrum/BreadCrum";
import moment from "moment";

const DeviceDetail = () => {
  const [DeviceToggle, setDeviceToggle] = useState(false);
  const [SiteToggle, setSiteToggle] = useState(false);
  const [time, setTime] = useState("");

  const router = useRouter();
  const { service_id, site_name, device } = router.query;

  console.warn("time from pickeer", time);
  const data = [
    {
      label: "CPU",
      value: "cpu",
    },
    {
      label: "Memory",
      value: "memory",
    },
    {
      label: "Interface",
      value: "interface",
    },
  ];

  const currentTime = moment(); // Get the current time
  useEffect(() => {
    const timeBefore7Hours = currentTime.subtract(1, "hours"); // Subtract 7 hours from the current time
    setTime(timeBefore7Hours.format("YYYY-MM-DDTHH:mm:ss").toString());
  }, []);

  console.log("time in device details", time);
  // Display the results
  // console.log("Current Time:", currentTime.format("YYYY-MM-DD HH:mm:ss"));
  // console.log(
  //   "Time 7 Hours Before:",
  //   timeBefore7Hours.format("YYYY-MM-DD HH:mm:ss")
  // );

  return (
    <div className="relative">
      <Navbar />
      {/* <Link href="/Dashboard/Dashboard">
        <div className="m-2">
        <Button color="blue">Dashboard</Button>
        </div>
      </Link> */}
      <div className="flex flex-col justify-start sticky top-0 z-10 bg-white">
        <div className="my-4 mx-8 p-4">
          <BreadcrumbsWithIcon site={site_name} service_id={service_id} />
        </div>
        <div className=" flex ml-8">
          <div className="flex w-fit h-fit rounded-xl p-2 m-4 border border-slate-900 text-l bg-[#00acc1] text-white cursor-pointer">
            <BsRouterFill />
            <p className="ml-2">{device}</p>
          </div>
        </div>
        <div className="border-t-2 m-2"></div>
        <div className="flex justify-end mx-4">
          <div className=" flex border-2 p-2">
            <Picker setTime={setTime} />
            <div className="ml-4 self-center">
              <SwitchLabel />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-4">
          <Tabs value="cpu" orientation="vertical">
            <TabsHeader className="w-32 fixed left-0 z-10">
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="h-20">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="pl-16">
              <TabPanel key="cpu" value="cpu">
                <CpuUtilozation device={device} gteTime={time} />
              </TabPanel>
              <TabPanel key="memory" value="memory">
                <MemoryUtilization />
              </TabPanel>
              <TabPanel key="interface" value="interface">
                <Interface />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetail;
