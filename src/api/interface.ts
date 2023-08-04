export const interfaceData = async (props: any) => {
  // console.log("props in interface data", props);
  try {
    const res = await fetch(`http://95.217.191.79:8000/interfaceSummary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(props),
    });
    const newData = await res.json();
    // console.log("data in interface data", newData);
    return newData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const interfaceNames = async (props: any) => {
  // console.log("props  in All interfaces name", props);
  try {
    const res = await fetch(`http://95.217.191.79:8000/getAll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(props),
    });
    const newData = await res.json();
    // console.log("data in All interfaces name", newData);
    return newData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const interfaceGraphData = async (props: any) => {
  // console.log("props in interface graph data", props);
  try {
    const res = await fetch(`http://95.217.191.79:8000/interface`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(props),
    });
    const newData = await res.json();
    // console.log("data in interface graph data", newData);
    return newData;
  } catch (error) {
    console.error("Error:", error);
  }
};

