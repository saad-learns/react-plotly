import Plot from "react-plotly.js";
import * as d3 from "d3";

const Surface = () => {
  return (
    <div style={{ height: 1000 }}>
      <Plot
        data={[
          {
            x: [0, 1, 2, 3, 4],
            y: [0, 1, 2, 3],
            z: [
              [10, 20, 30, 20, 10], // y=0
              [30, 40, 50, 40, 30], // y=1
              [30, 40, 50, 40, 30], // y=2
              [10, 20, 30, 20, 10], // y=3
            ],
            type: "surface",
          },
        ]}
        layout={{
          margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
          },
        }}
      />
    </div>
  );
};

export default Surface;
