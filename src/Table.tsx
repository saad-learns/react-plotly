import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table = () => {

  const [rowData, setRowData] = React.useState([{ time: 0.0, bar: 1 }]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRowData(prevState => {
        const lastElement = prevState[prevState.length-1];
        return prevState.concat([{time: lastElement.time + 1, bar: 10 * lastElement.bar}]);
      })
    }, 10000)

    return () => clearInterval(interval);
  }, []);

  const [columnDefs] = React.useState<({ field: "time" } | { field: "bar" })[]>(
    [{ field: "time" }, { field: "bar" }],
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default Table;
