import React from "react";
import Chart from "react-apexcharts";

import "./AmountCandidates.css";

const charts = {
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

function AmountVacancy() {
  return (
    <div>
      <div className="donut">
        <Chart
          options={charts.options}
          series={charts.series}
          type="donut"
          width="400"
          height="175"
        />
      </div>
    </div>
  );
}

export default AmountVacancy;
