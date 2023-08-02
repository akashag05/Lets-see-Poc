import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ChartInterface, ChartInterfaceError } from "../Highcharts/chartInterface";
import { InterfaceChartTable } from "../Table/ChartTable";
import Picker from "../Picker/Picker";
import { interfaceNames } from "@/api/interfaceAll";

export function Modal(props: any) {
  const bodyData = {
    gte: "2023-07-17T00:00:00",
    lte: "2023-07-27T23:59:59",
    device: props.value.device_name,
  };
  let [response, setResponse] = React.useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
        interfaceNames(bodyData).then((data) => setResponse(data));
    }
    fetchChartData();
}, [])
  const [toggle, setToggle] = React.useState("usage")
  const [size, setSize] = React.useState(props.ModalOpen);

  const handleOpen = (value: any) => {
    setSize(value);
    props.setModalOpen('');
  };

  useEffect(() => {
    setSize(props.ModalOpen)

  }, [props.ModalOpen])

  // console.warn("toggle", toggle)
  return (
    <>
      <Dialog
        open={
          size === "xl"
        }
        size={"xxl"}
        handler={handleOpen}
      >
        <DialogHeader>
          <div className="w-full">
            <div className="w-full flex justify-between items-center">
              <div>
                {props.value.device_name}
              </div>
              <div>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => handleOpen(null)}
                  className="mr-1 text-xl"
                >
                  <span>x</span>
                </Button>
              </div>
            </div>
            <div className="z-50 flex justify-between w-full mt-2">
              <select className="w-1/5 border-2 rounded" name="" id="interfaceSelect">
                 {response.map((option) => {
                  return (
                    <option key={option} value={option} >
                      {option}
                    </option>
                  );
                })}
              </select>

              <Picker />
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider className="overflow-y-scroll">
          {toggle == "usage" ? (

            <div id="usage-chart-div">
              <ChartInterface interfaceName={props.title} />
            </div>
          ) : (
            <div id="error-discard-chart-div">
              <ChartInterfaceError interfaceName={props.title} yValue='Count' />
            </div>

          )}

          <InterfaceChartTable />
        </DialogBody>
        <DialogFooter>
          <div className="flex w-full justify-center gap-3">
            <div id="usage-button">
              <Button variant={toggle == 'usage' ? "contained" : 'outlined'} onClick={() => setToggle("usage")}>Usage</Button>
              {/* <input type="radio" name="interface" id="usage" checked />&nbsp;<label>Usage</label> */}
            </div>
            <div>
              <Button variant={toggle != 'usage' ? "contained" : 'outlined'} onClick={() => setToggle("error")}>Error / Discards</Button>
              {/* <input type="radio" name="interface" id="error" />&nbsp;<label>Error / Discards</label> */}
            </div>
          </div>

          {/* <Link href={"/InterfaceChart/InterfaceChart?interface="+props.interfaceName} target="blank">
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Open on new tab</span>
            </Button>
          </Link> */}
        </DialogFooter>
      </Dialog >

    </>
  );
}