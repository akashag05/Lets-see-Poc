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
import { interfaceGraphData, interfaceNames } from "@/api/interface";
import { useAppContext } from "../appContext";
import moment from "moment";
import Select from "react-select";

export function Modal(props: any) {
  const { time, toggleTime } = useAppContext()
  let [response, setResponse] = React.useState([]);
  let [data, setData] = React.useState();
  let [interfaceSelect, setInterfaceSelect] = React.useState(props.interfaceName);

  const [toggle, setToggle] = React.useState("usage")
  const [size, setSize] = React.useState(props.ModalOpen);

  useEffect(() =>{
    setInterfaceSelect(props.interfaceName)
  },[size])
  useEffect(() => {
    // console.log("'"+interfaceSelect+"'")
    const currentTime = moment();
    const bodyData = {
      lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
      gte: time,
      device: props.value.device_name,
    };
    const fetchChartData = async () => {
      interfaceNames(bodyData).then((data) => setResponse(data));
    }
    fetchChartData();
  }, [props.value.device_name, time, props.interfaceName])

  useEffect(() => {
    // console.log("interface -",props.interfaceSelect)
    const currentTime = moment();
    const bodyData = {
      lte: currentTime.format("YYYY-MM-DDTHH:mm:ss"),
      gte: time,
      device: props.value.device_name,
      interface: interfaceSelect
    };
    const getData = async () => {
      let response = await interfaceGraphData(bodyData);
      try {
        setData(response);
      } catch (error) {
        console.error(error)
      }
    };
    getData();
  }, [props.value.device_name, time, interfaceSelect, props.interfaceName, size]);


  const handleOpen = (value: any) => {
    setSize(value);
    props.setModalOpen('');
  };

  useEffect(() => {
    setSize(props.ModalOpen)

  }, [props.ModalOpen])
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
                  <span>✖</span>
                </Button>
              </div>
            </div>
            <div className="z-50 flex justify-between w-full mt-2 text-sm">
              <Select
                className="w-1/5 border-2 rounded"
                value={{id:interfaceSelect, label: interfaceSelect, value: interfaceSelect}}
                onChange={(e) => {setInterfaceSelect(e.value)}}
                options={response.map((option, i) => {
                  return {
                    label: option,
                    value: option,
                    id: i
                  };
                })}
              />

              <Picker />
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider className="overflow-y-scroll">
          {toggle == "usage" ? (
            <div id="usage-chart-div">
              <ChartInterface length={props.length} unit={props.unit} graphTitle={"interface - " + interfaceSelect} interfaceName={interfaceSelect} deviceName={props.value.device_name} interfaceSelect={interfaceSelect} />
            </div>
          ) : (
            <div id="error-discard-chart-div">
              <ChartInterfaceError data={data} graphTitle={"interface - " + interfaceSelect} interfaceName={interfaceSelect} deviceName={props.value.device_name} interfaceSelect={interfaceSelect} yValue='Count' />
            </div>

          )}

          <InterfaceChartTable unit={props.unit} interfaceSelect={interfaceSelect} length={props.length} data={data} />
        </DialogBody>
        <DialogFooter>
          <div className="flex w-full justify-center gap-3">
            <div id="usage-button">
              <Button variant={toggle == 'usage' ? "contained" : 'outlined'} onClick={() => setToggle("usage")}>Usage</Button>
            </div>
            <div>
              <Button variant={toggle != 'usage' ? "contained" : 'outlined'} onClick={() => setToggle("error")}>Error / Discards</Button>
            </div>
          </div>
        </DialogFooter>
      </Dialog >

    </>
  );
}