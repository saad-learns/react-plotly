import Plot, { PlotParams } from "react-plotly.js";
import React from "react";

export const BarChart = () => {
  const plotParams: PlotParams = {
    data: [
      {
        x: [
          "nitrogen",
          "methane",
          "ethane",
          "propane",
          "i-butane",
          "n-butane",
          "isopentane",
          "n-pentane",
          "hexane",
          "heptane",
        ],
        y: [
          0.026553675532341003, 0.8500370383262634, 0.07651432603597641,
          0.037413351237773895, 0.004853058140724897, 0.0036669778637588024,
          0.000602149753831327, 0.00033371266908943653, 0.00002434169982734602,
          0.0000013591270544566214,
        ],
        type: "bar",
        orientation: "v",
        //@ts-ignore
        bargap: 0.2,
        // @ts-ignore
        // alignmentgroup: "hello",
        name: "1 (kg/kg)",
        offsetgroup: "saad",
        visible: true,
        mode: "lines",
        marker: { size: 10, symbol: "circle", maxdisplayed: 0 },
        line: { color: "#1F77B4", dash: "solid" },
        legendgroup: "T_101 → Feed vapour mass fraction<br>Time = 0",
        legendgrouptitle: {
          text: "T_101 → Feed vapour mass fraction<br>Time = 0",
        },
        hoverlabel: { namelength: -1 },
      },
      {
        x: [
          "nitrogen",
          "methane",
          "ethane",
          "propane",
          "i-butane",
          "n-butane",
          "isopentane",
          "n-pentane",
          "hexane",
          "heptane",
        ],
        y: [
          0.016488848254084587, 0.9217074513435364, 0.04426394775509834,
          0.014759049750864506, 0.0014524486614391208, 0.0010974723845720291,
          0.00014517873933073133, 0.00008045835420489311,
          0.000004913549219054403, 2.3594539300120232e-7,
        ],
        type: "bar",
        //@ts-ignore
        bargap: 0.2,
        orientation: "v",
        yaxis: "y2",
        offsetgroup: "y2",
        // @ts-ignore
        // alignmentgroup: "hello",
        name: "1 (mol/mol)",
        marker: { size: 10, symbol: "circle", maxdisplayed: 0 },
        line: { color: "#1F77B4", dash: "solid" },
        legendgroup: "T_101 → Feed vapour molar fraction<br>Time = 0",
        legendgrouptitle: {
          text: "T_101 → Feed vapour molar fraction<br>Time = 0",
        },
        hoverlabel: { namelength: -1 },
      },
      {
        x: [
          "nitrogen",
          "methane",
          "ethane",
          "propane",
          "i-butane",
          "n-butane",
          "isopentane",
          "n-pentane",
          "hexane",
          "heptane",
        ],
        y: [
          0.016488848254084587, 0.9217074513435364, 0.04426394775509834,
          0.014759049750864506, 0.0014524486614391208, 0.0010974723845720291,
          0.00014517873933073133, 0.00008045835420489311,
          0.000004913549219054403, 2.3594539300120232e-7,
        ],
        type: "bar",
        //@ts-ignore
        bargap: 0.2,
        orientation: "v",
        yaxis: "y3",
        offsetgroup: "y3",
        // @ts-ignore
        // alignmentgroup: "hello",
        name: "2 (mol/mol)",
        marker: { size: 10, symbol: "circle", maxdisplayed: 0 },
        line: { color: "#1F77B4", dash: "solid" },
        legendgroup: "T_101 → Feed vapour molar fraction<br>Time = 0",
        legendgrouptitle: {
          text: "T_101 → Feed vapour molar fraction<br>Time = 0",
        },
        hoverlabel: { namelength: -1 },
      },
    ],
    layout: {
      title: "T_101 → Feed vapour mass fraction",
      xaxis: {
        title: { text: "components" },
        type: "category",
        exponentformat: "power",
        range: [-0.5, 9.5],
        showline: true,
        zeroline: false,
        automargin: true,
        autorange: true,
      },
      showlegend: true,
      legend: {
        orientation: "h",
        itemwidth: 45,
        groupclick: "toggleitem",
        title: { text: "NGL_Gas_Subcooled_Process", side: "top" },
        yref: "container",
      },
      yaxis: {
        title: { text: "kg/kg" },
        type: "linear",
        exponentformat: "power",
        range: [0, 0.9513916467365465],
        anchor: "x",
        // @ts-ignore
        autoshift: false,
        side: "left",
        showline: true,
        zeroline: false,
        automargin: true,
        autorange: true,
        showspikes: true,
      },
      yaxis2: {
        title: { text: "mol/mol" },
        type: "linear",
        exponentformat: "power",
        range: [0, 0.9927309814252352],
        anchor: "x",
        autoshift: false,
        overlaying: "y",
        side: "right",
        // @ts-ignore
        tickmode: "sync",
        showline: true,
        zeroline: false,
        automargin: true,
        autorange: true,
        showspikes: true,
      },
      yaxis3: {
        title: { text: "mol/mol" },
        type: "linear",
        exponentformat: "power",
        range: [0, 0.9927309814252352],
        anchor: "x",
        autoshift: false,
        overlaying: "y",
        side: "right",
        // @ts-ignore
        tickmode: "sync",
        showline: true,
        zeroline: false,
        automargin: true,
        autorange: true,
        showspikes: true,
      },
    },
    config: {
      displaylogo: false,
      modeBarButtonsToRemove: ["select2d", "lasso2d"],
      modeBarButtonsToAdd: ["toggleSpikelines"],
    },
  };
  return (
    <div>
      <Plot data={plotParams.data} layout={plotParams.layout} />
    </div>
  );
};
