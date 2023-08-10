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
import Select from "react-select";
import { interfaceNames } from "@/api/interface";
import { useAppContext } from "@/components/appContext";
import Table from "@/components/Table/table";
import { viewGetData } from "@/api/view";

const DeviceDetail = () => {
  const [DeviceToggle, setDeviceToggle] = useState(false);
  const [SiteToggle, setSiteToggle] = useState(false);
  const [flowVisible, setFlowVisible] = useState(false);
  const [interfaces, setInterfaces] = useState([]);
  const [views, setViews] = useState([]);
  const [viewsAll, setViewsAll] = useState([]);
  const [viewSelected, setViewSelected] = useState('');
  const [viewSelectedData, setViewSelectedData] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(0);
  const { time, toggleTime } = useAppContext()
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

  const data2 = [
    "Application Per Bandwidth",
    "Top Conversation",
    "Top Host Destination",
    "Top Host Source ",
    "Top Destination Port",
    "Top Source Port ",
    "Top DSCP with Application"
  ]

  const in_out = [
    "Incoming",
    "Outgoing"
  ]

  useEffect(() => {
    // console.log("'"+interfaceSelect+"'")
    const currentTime = moment();
    const bodyData = {
      lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
      gte: time,
      device: devices[selectedDevice],
    };
    const fetchData = async () => {
      interfaceNames(bodyData).then((data) => setInterfaces(data));
    }
    fetchData();
  }, [selectedDevice, time])

  useEffect(() => {
    // console.log("'"+interfaceSelect+"'")
    const currentTime = moment();
    const bodyData = {
      lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
      gte: time,
      device: devices[selectedDevice],
    };
    const fetchData = async () => {
      viewGetData(bodyData).then((data) => {
        setViews(Object.keys(data))
        setViewsAll(data)
        return data
      }).then(() => {
        setViewSelected(views[0])
      }
      ).then(() => {
        setViewSelectedData(formatColoumns(viewsAll[viewSelected]))
      }
      );
    }
    fetchData();
  }, [selectedDevice, time])

  function formatColoumns(datas: []) {
    let arr = [];
    datas.map(data => {
      arr.push(
        {
          Header: data,
          accessor: data,
        }
      )
    })
    return arr;
  }

  console.log(viewSelectedData)



  // console.log(interfaces)

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
              <div onClick={() => setSelectedDevice(i)} key={i} className={selectedDevice == i ? "flex w-fit h-fit items-center rounded-xl p-2 m-4 border-2 border-slate-900 text-l bg-[#00acc1] text-white cursor-pointer" : "flex w-fit h-fit rounded-xl p-2 m-4 border-2 border-slate-900 text-l items-center bg-white text-[#00acc1] cursor-pointer"}>
                <BsRouterFill />
                <p className="ml-2">{device1}</p>
              </div>
            )
          })}
        </div>
        <div className="border-t-2 m-2"></div>
        <div className={flowVisible ? "flex justify-between mx-4" : "flex justify-end mx-4"}>
          <div className={flowVisible ? "block flex flex-row gap-4 items-center" : "hidden"}>
            <Select
              className="w-[15rem] rounded h-fit"
              value={{ id: 1, label: viewSelected?.replaceAll("_", " "), value: viewSelected }}
              onChange={(e) => {
                setViewSelected(e.value)
                setViewSelectedData(formatColoumns(viewsAll[viewSelected]))
              }}
              options={views.map((option, i) => {
                return {
                  label: option.replaceAll("_", " "),
                  value: option,
                  id: i
                };
              })}
            />
            <Select
              className="w-[15rem] rounded h-fit"
              value={{ id: 1, label: interfaces[0], value: interfaces[0] }}
              // onChange={(e) => {setInterfaceSelect(e.value)}}
              options={interfaces.map((option, i) => {
                return {
                  label: option,
                  value: option,
                  id: i
                };
              })}
            />
            <Select
              className="w-[15rem] rounded h-fit"
              value={{ id: 1, label: in_out[0], value: in_out[0] }}
              // onChange={(e) => {setInterfaceSelect(e.value)}}
              options={in_out.map((option, i) => {
                return {
                  label: option,
                  value: option,
                  id: i
                };
              })}
            />
          </div>
          <div className=" flex border-2 p-2 rounded-md">
            <Picker />
            <div className="ml-4 self-center">
              <SwitchLabel flowVisible={flowVisible} setFlowVisible={setFlowVisible} />
            </div>
          </div>

        </div>
      </div>

      <div className={flowVisible ? 'block p-4' : 'hidden'}>
        <Table COLOUMNS={viewSelectedData} tableData={[]} />
      </div>
      <div className={flowVisible ? 'hidden' : 'block'}>
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
                <CpuUtilozation device={devices[selectedDevice]} />
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
