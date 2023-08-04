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
  const [selectedDevice, setSelectedDevice] = useState(0);
  const currentTime = moment();

  // const [time, setTime] = useState(
  //   currentTime.subtract(15, "days").format("YYYY-MM-DDTHH:mm:ss")
  // );

  // const [timeDropdown, setTimeDropdown] = useState('last15d');

  const router = useRouter();
  let { service_id, site_name, device } = router.query;
  let devices = (device as String).split(', ');
  // let devices = (<String>device).split(',');
  // console.log('devices - ' + devices[0])
  // alert(typeof device)

  // console.warn("time from pickeer", time);
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
  // Get the current time

  // useEffect(() => {
  //   const timeBefore7Hours = currentTime.subtract(1, "hours"); // Subtract 7 hours from the current time
  //   setTime(timeBefore7Hours.format("YYYY-MM-DDTHH:mm:ss").toString());
  // }, []);

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
            <div className="flex ml-8">
        {devices.map((device1, i) => {
          return ( 
              <div onClick={()=>setSelectedDevice(i)} key={i} className={selectedDevice == i ?"flex w-fit h-fit items-center rounded-xl p-2 m-4 border-2 border-slate-900 text-l bg-[#00acc1] text-white cursor-pointer":"flex w-fit h-fit rounded-xl p-2 m-4 border-2 border-slate-900 text-l items-center bg-white text-[#00acc1] cursor-pointer"}>
                <BsRouterFill />
                <p className="ml-2">{device1}</p>
              </div>
          )
        })}
            </div>
        <div className="border-t-2 m-2"></div>
        <div className="flex justify-end mx-4">
          <div className=" flex border-2 p-2 rounded-md">
            <Picker />
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
                <CpuUtilozation device={devices[selectedDevice]}/>
              </TabPanel>
              <TabPanel key="memory" value="memory">
                <MemoryUtilization device={devices[selectedDevice]} />
              </TabPanel>
              <TabPanel key="interface" value="interface">
                <Interface device={devices[selectedDevice]} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetail;
