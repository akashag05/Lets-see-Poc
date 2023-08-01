export const memoryUtilization = async (props: any) => {
//   console.log("props  in add role", props);
  try {
    const res = await fetch(`http://95.217.191.79:8000/memoryUtilization`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(props),
    });
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.error("Error:", error);
  }
};
