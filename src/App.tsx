import React from "react";
import "./App.css";
import Plot, { PlotParams } from "react-plotly.js";

const cloneJSON = (input: any) => JSON.parse(JSON.stringify(input));

function App() {
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

  const updateData = () => {
    setPlotParams((prevState) => cloneJSON(prevState));
  };

  return (
    <div className="App">
      <div style={{ padding: 10 }}>
        <button onClick={updateData}>Update Data</button>
      </div>

      <Plot
        data={plotParams.data}
        layout={plotParams.layout}
        onUpdate={() => setPlotUpdated(prevState => prevState+1)}
      />

      <div>
        Plot updated: {plotUpdated}
      </div>
    </div>
  );
}

export default App;
