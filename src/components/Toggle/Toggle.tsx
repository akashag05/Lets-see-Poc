import { Switch } from "@material-tailwind/react";

export function SwitchLabel(props:any) {
  return <Switch label={props.flowVisible?"Flow":"Matric" } onClick={() => props.setFlowVisible(!props.flowVisible)}/>;
}
