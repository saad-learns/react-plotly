import Plot, { PlotParams } from "react-plotly.js";
import React from "react";

export const Surface3d = () => {
  /**
   * time | axial | data
   * 0.0  | 1.0   | 10.0
   * 0.0  | 2.0   | 50.0
   * 0.0  | 3.0   | 60.0
   * 1.0  | 1.0   | 30.0
   * 1.0  | 2.0   | 20.0
   * 1.0  | 3.0   | 30.0
   * 2.0  | 1.0   | 50.0
   * 2.0  | 2.0   | 60.0
   * 2.0  | 3.0   | 70.0
   */
  const plotParams: PlotParams = {
    data: [
      {
        name: "foo",
        x: [0.0, 1.0, 2.0],
        y: [1.0, 2.0, 3.0],
        z: [
          [10.0, 30.0, 50.0],
          [50.0, 20.0, 60.0],
          [60.0, 30.0, 70.0],
        ],
        type: "surface",
      },
    ],
    layout: {},
  };

  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};
