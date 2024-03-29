import React from "react";
import "./App.css";
import Plot, { PlotParams } from "react-plotly.js";
import { PlotData } from "plotly.js";

function TwoDPlot() {
  const [plotUpdated, setPlotUpdated] = React.useState<number>(0);
  const [plotParams, setPlotParams] = React.useState<PlotParams>({
    data: [
      {
        x: [-3, -2, -1, 0, 1, 2, 3],
        y: [
          -0.1411200080598672, -0.9092974268256817, -0.8414709848078965, 0,
          0.8414709848078965, 0.9092974268256817, 0.1411200080598672,
        ],
      },
    ],
    layout: {},
  });

  const updatePlot = () => {
    setPlotParams((prevState) => ({
      data: [
        {
          x: (prevState.data[0] as PlotData).x,
          y: (prevState.data[0] as PlotData).y,
        },
      ],
      layout: {},
    }));
  };

  return (
    <div className="App">
      <div style={{ padding: 10 }}>
        <button onClick={updatePlot}>Update Plot</button>
      </div>

      <Plot
        data={plotParams.data}
        layout={plotParams.layout}
        onUpdate={() => setPlotUpdated((prevState) => prevState + 1)}
      />

      <div>Plot updated: {plotUpdated}</div>
    </div>
  );
}

export default TwoDPlot;
