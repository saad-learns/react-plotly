import Plot, { PlotParams } from "react-plotly.js";
import React from "react";

export const YAxisTicks = () => {
  return (
    <>
      <SinglePlotTheePoints />
      <SinglePlotTenPoints />
      <TwoPlotsSingleYAxis />
      <TwoPlotsTwoYAxes />
      <TwoPlotsTwoYAxesRight />
      <TwoPlotsTwoYAxesRightOverlayOnY />
      <TwoPlotsTwoYAxesRightOverlayOnYTickModeSync />
      <TwoPlotsTwoYAxesRightOverlayOnYTickModeAuto />
      <TwoPlotsTwoYAxesRightOverlayOnYTickModeAutoWithNTicks />
      <TwoPlotsTwoYAxesRightOverlayOnYTickModeUndefinedWithNTicks />
    </>
  );
};

const SinglePlotTheePoints = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      title: "Single Plot Three Points",
      width: 1080,
      height: 1080,
      xaxis: {
        title: "Time(s)<br>DISCRETE=1.0",
      },
    },
  };
  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const SinglePlotTenPoints = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      title: "Single Plot Ten Points",
      width: 1080,
      height: 1080,
    },
  };
  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsSingleYAxis = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      title: "Two Plots Single Y Axis",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxes = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      yaxis2: {
        title: "yaxis2 title",
      },
      title: "Two Plots Two Y Axes",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxesRight = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      yaxis2: {
        title: "yaxis2 title",
        side: "right",
      },
      title: "Two Plots Two Y Axes Right",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxesRightOverlayOnY = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      yaxis2: {
        title: "yaxis2 title",
        overlaying: "y",
        side: "right",
      },
      title: "Two Plots Two Y Axes Right Overlay On Y",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxesRightOverlayOnYTickModeSync = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      yaxis2: {
        title: "yaxis2 title",
        overlaying: "y",
        side: "right",
        // @ts-ignore
        tickmode: "sync",
      },
      title: "Two Plots Two Y Axes Right Overlay On Y Tick Mode Sync",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxesRightOverlayOnYTickModeAuto = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
      },
      yaxis2: {
        title: "yaxis2 title",
        overlaying: "y",
        side: "right",
        tickmode: "auto",
      },
      title: "Two Plots Two Y Axes Right Overlay On Y Tick Mode Auto",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxesRightOverlayOnYTickModeAutoWithNTicks = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
        nticks: 3,
      },
      yaxis2: {
        title: "yaxis2 title",
        overlaying: "y",
        side: "right",
        tickmode: "auto",
        nticks: 5,
      },
      title:
        "Two Plots Two Y Axes Right Overlay On Y Tick Mode Auto with N Ticks",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};

const TwoPlotsTwoYAxesRightOverlayOnYTickModeUndefinedWithNTicks = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [15, 25, 30, 40, 45, 55, 60, 70, 75, 85],
        yaxis: "y2",
      },
    ],
    layout: {
      yaxis: {
        title: "yaxis title",
        nticks: 3,
      },
      yaxis2: {
        title: "yaxis2 title",
        overlaying: "y",
        side: "right",
        nticks: 5,
      },
      title:
        "Two Plots Two Y Axes Right Overlay On Y Tick Mode Undefined with N Ticks",
      width: 1080,
      height: 1080,
    },
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};
