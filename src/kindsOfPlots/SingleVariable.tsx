import Plot, { PlotParams } from "react-plotly.js";

export const SingleVariable = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3, 4, 5],
        y: [2, 4, 8, 16, 32],
        mode: "lines+markers",
        name: "Flowsheet -> Reactor 1 -> Tube temperature",
        visible: true,
        marker: {
          size: 10,
          symbol: "circle",
          maxdisplayed: 0, // unlimited
        },
        line: {
          color: "purple",
          dash: "solid",
        },
        // legendgroup: "Flowsheet -> Reactor 1 -> Tube temperature",
        // legendgrouptitle: {
        //   text: "Flowsheet -> Reactor 1 -> Tube temperature",
        // },
        showlegend: true,
        hoverlabel: {
          namelength: 15,
        },
      },
    ],
    layout: {},
  };

  return <Plot data={plotParams.data} layout={plotParams.layout} />;
};
