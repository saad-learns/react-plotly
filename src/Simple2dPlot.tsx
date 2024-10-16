import Plot, { PlotParams } from "react-plotly.js";

export const Simple2dPlot = () => {
  const plotParams: PlotParams = {
    data: [
      // {
      //   x: ["red", "green"],
      //   y: [10, 20],
      //   type: "bar",
      // },
      {
        x: ["red", "green"],
        y: [10, 20],
        mode: "markers",
        type: "bar",
      },
      {
        x: ["red", "green"],
        y: [15, 6],
        mode: "markers",
        type: "bar",
      },
      {
        x: ["red", "green"],
        y: [5, 7],
        mode: "markers",
        type: "bar",
      },
    ],
    layout: {
      title: "Simple 2D Plot",
      showlegend: true,
      xaxis: {
        showspikes: true,
        title: {
          text: "x",
        },
        tickvals: [-1, 0, 1, 2, 3, 4, 5],
        showline: true,
        zeroline: false,
        range: [-1, 6],
      },
      yaxis: {
        showspikes: true,
        title: {
          text: "y = f(x)",
        },
        showline: true,
        zeroline: false,
        range: [-6, 34],
      },
    },
    config: {},
  };
  return <Plot data={plotParams.data} layout={plotParams.layout} />;
};
