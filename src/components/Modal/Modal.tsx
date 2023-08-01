import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import PieChartComponent from "../Highcharts/pieChart";

export function Modal(props: any) {
  const [size, setSize] = React.useState(props.ModalOpen);

  const handleOpen = (value: any) => {
    setSize(value);
    props.setModalOpen('');
  };

  useEffect(() => {
    setSize(props.ModalOpen)

  }, [props.ModalOpen])
console.log(props.value)
  return (
    <>
      <Dialog
        open={
          size === "xs"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>{props.title}</DialogHeader>
        <DialogBody divider>
          <PieChartComponent data={props.value} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Link href="/InterfaceChart/InterfaceChart" target="blank">
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Open on new tab</span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>

    </>
  );
}