import "./App.css";
import React from "react";

interface Data {
  x: number;
  y: number;
}

window.logs = [];

function State() {
  const [data, setData] = React.useState<Data>({ x: 0, y: 0 });

  function update() {
    setData((prevState) => {
      const updatedState = {
        x: prevState.x + 1,
        y: prevState.y + 1,
      };

      window.logs.push({
        message: "increment x,y by 1",
        prevState,
        updatedState,
      });
      return updatedState;
    });
  }

  return (
    <>
      <div className="App">
        <div>x: {data.x}</div>
        <div>y: {data.y}</div>
        <button onClick={update}>update</button>
      </div>
    </>
  );
}

export default State;
