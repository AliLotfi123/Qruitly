import React from "react";
import Chart from "react-apexcharts";

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
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default AmountVacancy;
