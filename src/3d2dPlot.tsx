import Plot, { PlotParams } from "react-plotly.js";

export const ThreeD2dPlot = () => {
  const plotParams: PlotParams = {
    data: [
      // {
      //   x: [1, 2, 3, 4, 5],
      //   y: [2, 4, 8, 16, 32],
      //   mode: "lines+markers",
      // },
      // {
      //   x: [1, 2, 3, 4, 5],
      //   y: [32, 16, 8, 8, 2],
      //   yaxis: "y2",
      //   mode: "lines+markers",
      // },
      // {
      //   x: [10, 11, 21, 31, 41],
      //   y: [10, 11, 12, 13],
      //   z: [
      //     [10, 20, 30, 20, 10], // y=0
      //     [30, 40, 50, 40, 30], // y=1
      //     [30, 40, 50, 40, 30], // y=2
      //     [10, 20, 30, 20, 10], // y=3
      //   ],
      //   type: "surface",
      //   showlegend: false,
      // },
      {
        x: [0, 1, 2, 3, 4],
        y: [0, 1, 2, 3, 4],
        z: [0, 0, 0, 0, 0],
        type: "scatter3d",
      },
      {
        x: [1, 2, 3, 4, 5],
        y: [2, 4, 8, 16, 32],
        z: [0, 0, 0, 0, 0],
        yaxis: "y2",
        type: "scatter3d",
      },
    ],
    layout: {
      xaxis: {
        showline: true,
        zeroline: false,
        automargin: true,
      },
      yaxis: {
        showline: true,
        zeroline: false,
        automargin: true,
      },
      yaxis2: {
        showline: true,
        zeroline: false,
        automargin: true,
      },
    },
  };
  return <Plot data={plotParams.data} layout={plotParams.layout} />;
};
