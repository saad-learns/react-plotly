import Plot from "react-plotly.js";

export const WeirdPlot = () => {
  const plotParams = {
    data: [
      {
        x: [10],
        y: [1],
        name: "foo (K)",
        mode: "lines+markers",
      },
      {
        x: [10, 20, 30, 40, 50],
        y: [0, 1, 3, 4, 5],
        yaxis: "y2",
        name: "bar (K)",
        mode: "lines+markers",
      },
    ],
    layout: {
      title: "foo",
      xaxis: {
        title: { text: "K" },
      },
      yaxis: {
        title: { text: "Time (foo)" },
        side: "left",
        overlaying: "free",
        tickvals: [1],
        showline: true,
      },
      yaxis2: {
        title: { text: "Time (bar)" },
        side: "right",
        overlaying: "y",
        showline: true,
      },
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};
