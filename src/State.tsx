import "./App.css";
import React from "react";
import { StateUpdateLogMessage } from "./Logger";

declare global {
  interface Window {
    logs: StateUpdateLogMessage<Data>[];
  }
}
window.logs = [];

class DataBuilder {
  private x: number;
  private y: number;

  private constructor(data: Data) {
    this.x = data.x;
    this.y = data.y;
  }

  static fromPlotParams(data: Data) {
    return new DataBuilder(data);
  }

  withNewX(x: number) {
    this.x = x;
    return this;
  }

  withNewY(y: number) {
    this.y = y;
    return this;
  }

  build(): Data {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

interface Data {
  x: number;
  y: number;
}

function State() {
  const [data, setData] = React.useState<Data>({ x: 0, y: 0 });

  function update() {
    setData((prevState) => {
      const newState = DataBuilder.fromPlotParams(prevState)
        .withNewX(prevState.x + 1)
        .build();

      window.logs.push({ message: "updating x", prevState, newState });
      return newState;
    });

    setData((prevState) => {
      let newState = DataBuilder.fromPlotParams(prevState)
        .withNewY(prevState.y + 1)
        .build();
      window.logs.push({ message: "updating x", prevState, newState });
      return newState;
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
