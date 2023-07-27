import React from "react";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
const Picker = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button>Time Range</Button>
      </MenuHandler>
      <MenuList className="max-h-36">
        <MenuItem>5 min</MenuItem>
        <MenuItem>10 min</MenuItem>
        <MenuItem>15 min</MenuItem>
        <MenuItem>30 min</MenuItem>
        <MenuItem>Last 1 hour</MenuItem>
        <MenuItem>Last 7 hour</MenuItem>
        <MenuItem>Last 24 hour</MenuItem>
        <MenuItem>Last 7 Days</MenuItem>
        <MenuItem>Last 15 Days</MenuItem>
        <MenuItem>Last 30 Days</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Picker;
