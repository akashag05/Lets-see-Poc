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
          {/* <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
          </FormControl> */}
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
          <Link href={"/InterfaceChart/InterfaceChart?interface="+props.interfaceName} target="blank">
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