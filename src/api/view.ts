export const viewGetData = async (props: any) => {
    try {
      const res = await fetch(`http://95.217.191.79:8000/getFlowData`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        // body: JSON.stringify(props),
      });
      if (res) {
        const newData = await res.json();
        // console.log("props  in add role", newData);
        return newData;
      }
      else {
        return []
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  