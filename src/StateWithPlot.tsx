import React from "react";
import "./App.css";
import Plot from "react-plotly.js";

declare global {
  interface Window {
    events: Event[];
  }
}

interface TraceData {
  x: number[];
  y: number[];
}

interface Event {
  message: string;
  prevState: TraceData;
  newState: TraceData;
}

class TraceDataBuilder {
  private x: number[];
  private y: number[];

  constructor(traceData: TraceData) {
    this.x = [...traceData.x];
    this.y = [...traceData.y];
  }

  static fromPlotParams(traceData: TraceData) {
    return new TraceDataBuilder(traceData);
  }

  withNewX(x: number) {
    this.x.push(x);
    return this;
  }

  withNewY(y: number) {
    this.y.push(y);
    return this;
  }

  build(): TraceData {
    return {
      x: [...this.x],
      y: [...this.y],
    };
  }
}

window.events = [];
let x = 1;
let y = 10;

function StateWithPlot() {
  const [data, setData] = React.useState<TraceData>({
    x: [1],
    y: [10],
  });

  const interval = React.useRef<NodeJS.Timer[]>([]);

  function updateX(x: number) {
    setData((prevState) => {
      const newState = TraceDataBuilder.fromPlotParams(prevState)
        .withNewX(x)
        .build();
      window.events.push({
        message: `adding x: ${x}`,
        prevState,
        newState,
      });

      return newState;
    });
  }

  function updateY(y: number) {
    setData((prevState) => {
      const newState = TraceDataBuilder.fromPlotParams(prevState)
        .withNewY(y)
        .build();
      window.events.push({
        message: `adding y: ${y}`,
        prevState,
        newState,
      });
      return newState;
    });
  }

  function startUpdate() {
    x = x + 1;
    y = y + 10;
    updateX(x);
    updateY(y);

    // interval.current.push(
    //   setInterval(() => {
    //
    //   }, 1000),
    // );
  }

  function stopUpdate() {
    interval.current.forEach(clearInterval);
    interval.current = [];
  }

  return (
    <div className="App">
      <Plot data={[data]} layout={{}} />
      <button onClick={startUpdate}>start update</button>
      {/*<button onClick={stopUpdate}>stop update</button>*/}
      {/*<button onClick={() => console.log(plotParams.data[0])}>*/}
      {/*  print plotparams*/}
      {/*</button>*/}
    </div>
  );
}

function toString(traceData: TraceData) {
  return `x: ${traceData.x}, y: ${traceData.y}`;
}

export default StateWithPlot;
