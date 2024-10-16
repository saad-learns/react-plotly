import Plot, { PlotParams } from "react-plotly.js";

export const Multiple3D = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: ["red", "red"],
        y: [5, 7],
        z: [
          [10, 20],
          [10, 40],
        ],
        type: "surface",
      },
      {
        x: ["blue", "blue"],
        y: [5, 7],
        z: [
          [10, 20],
          [10, 40],
        ],
        type: "surface",
      },
    ],
    layout: {},
    config: {},
  };
  return <Plot data={plotParams.data} layout={plotParams.layout} />;
};
