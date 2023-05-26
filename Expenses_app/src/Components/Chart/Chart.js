import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";

const Chart = (props) => {
  const datapointvalue = props.datapoints.map((datapoint) => datapoint.value);
  const totalmaximum = Math.max(...datapointvalue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          label={datapoint.label}
          maxValue={totalmaximum}
          value={datapoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
