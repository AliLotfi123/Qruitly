import React from "react";
import Chart from "react-apexcharts";

import "./AmountVacancy.css";

const charts = {
  options: {
    chart: {
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      id: "basic-bar",
      background: "#fff",

      sparkline: {
        enabled: false,
      },
    },

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

function AmountVacancy() {
  return (
    <div>
      <div className="mixed-chart">
        <Chart
          className="chart1"
          options={charts.options}
          series={charts.series}
          type="area"
          width="500"
        />
      </div>
    </div>
  );
}

export default AmountVacancy;
