import Plot, { PlotParams } from "react-plotly.js";
import React from "react";
import { Layout } from "plotly.js";

export const SinglePoint = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [0],
        y: [10],
        mode: "markers",
      },
    ],
    layout: {
      title: "Flowsheet → foo",

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

  const plotRef = React.useRef<Plot>(null);
  const onAfterPlot = () => {
    if (plotRef.current !== null) {
      const plotLayout: Layout = (plotRef.current as any).el.layout;
      console.log(plotLayout);
    }
  };
  return (
    <div>
      <Plot
        data={plotParams.data}
        onAfterPlot={onAfterPlot}
        layout={plotParams.layout}
        ref={plotRef}
      />
    </div>
  );
};
