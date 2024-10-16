import Plot, { PlotParams } from "react-plotly.js";
import React from "react";

export const FooterHack = () => {
  const mystyle = {
    position: "absolute",
    bottom: 0,
  };

  const plotParams: PlotParams = {
    data: [
      {
        x: [0, 1, 2],
        y: [10, 20, 30],
      },
    ],
    layout: {
      title: "Flowsheet → foo <p>is this a footer</p>",

      xaxis: {
        showline: true,
        zeroline: false,
        nticks: 1,
      },
      width: 1080,
      height: 1080,
      legend: {
        orientation: "h",
      },
    },
  };
  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};
