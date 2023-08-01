import React from "react";
import moment from "moment";

const Picker = (props: any) => {
  const [selectedValue, setSelectedValue] = React.useState(""); // State to store the selected value

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSelectedValue(event.target.value);
    console.log("dropdown value", event.target.value);
    let convertedDate;
    const currentTime = moment();
    if (value == "last1h") {
      convertedDate = currentTime.subtract(1, "hour");
    } else if (value == "last7h") {
      convertedDate = currentTime.subtract(7, "hours");
    } else if (value == "last24h") {
      convertedDate = currentTime.subtract(24, "hours");
    } else if (value == "last7d") {
      convertedDate = currentTime.subtract(7, "days");
    } else if (value == "last15d") {
      convertedDate = currentTime.subtract(15, "days");
    } else if (value == "last30d") {
      convertedDate = currentTime.subtract(30, "days");
    } else if (value == "last90d") {
      convertedDate = currentTime.subtract(90, "days");
    }

    const formattedTime = convertedDate.format("YYYY-MM-DDTHH:mm:ss");
    console.log("updated time", formattedTime);
    props.setTime(formattedTime);
  };

  return (
    <div>
      <select
        id="dropdown"
        className="mt-1 p-2 block w-full rounded-md bg-white border-2 border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        <option value="last1h">Last 1 hour</option>
        <option value="last7h">Last 7 hour</option>
        <option value="last24h">Last 24 hour</option>
        <option value="last7d">Last 7 Days</option>
        <option value="last15d">Last 15 Days</option>
        <option value="last30d">Last 30 Days</option>
        <option value="last90d">Last 90 Days</option>
      </select>
    </div>
  );
};

export default Picker;
