import Plot, { PlotParams } from "react-plotly.js";
import React from "react";

export const SinglePoint3DGraph = () => {
  const plotParams: PlotParams = {
    data: [
      {
        name: "foo",
        x: [0, 5, 10],
        y: [0, 5, 10],
        z: [0, 5, 10],
        type: "scatter3d",
      },
    ],
    layout: {
      title: "foo",
      scene: {
        xaxis: {
          title: { text: "Time (s)" },
        },
        yaxis: {
          title: { text: "colour" },
        },
        zaxis: {
          title: { text: "" },
        },
      },
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};
