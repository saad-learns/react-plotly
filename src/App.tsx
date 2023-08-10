import React from "react";
import "./App.css";
import Plot, { Figure, PlotParams } from "react-plotly.js";

const cloneJSON = (input: any) => JSON.parse(JSON.stringify(input));

function App() {
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

  const onInitialized = (figure: Readonly<Figure>) =>
    console.log("initialized with:", figure);

  const onUpdate = (figure: Readonly<Figure>) =>
    console.log("updated as: ", figure);

  return (
    <div className="App">
      <div style={{ padding: 10 }}>
        <button onClick={updateData}>Update Data</button>
      </div>

      <Plot
        data={plotParams.data}
        layout={plotParams.layout}
        onInitialized={onInitialized}
        onUpdate={onUpdate}
      />
    </div>
  );
}

export default App;
