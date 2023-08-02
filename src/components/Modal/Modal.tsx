import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ChartInterface, ChartInterfaceError } from "../Highcharts/chartInterface";
import { ErrorDiscardChartTable, UsageChartTable } from "../Table/ChartTable";
import Picker from "../Picker/Picker";

export function Modal(props: any) {
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
        </DialogHeader>
        <DialogBody divider className="overflow-y-scroll">
          <div className="z-50 flex justify-between w-full mb-5">

            <select className="w-1/5 border-2 rounded" name="" id="">
              <option value="">Gi0/0/0</option>
              <option value="">Gi0/0/1</option>
              <option value="">Gi0/0/2</option>
            </select>

            <Picker />
          </div>
          {toggle == "usage" ? (

            <div id="usage-chart-div">
              <ChartInterface interfaceName={props.title} />
            </div>
          ) : (
            <div id="error-discard-chart-div">
              <ChartInterfaceError interfaceName={props.title} yValue='Count' />
            </div>

          )}

          {toggle == "usage" ?
            (
              <UsageChartTable />
            ) : (
              <ErrorDiscardChartTable/>
            )
          }
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