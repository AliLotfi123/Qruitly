import React from "react";
import Chart from "react-apexcharts";
import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/amountvanacy.js";

function AmountVacancy() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  const salarys = data.vacancy.map((vacan) => {
    return vacan.salary;
  });

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

        sparkline: {
          enabled: true,
        },
      },

      xaxis: {
        categories: [
          "A",
          "B",
          "C",
          "D",
          "E",

          // !salarys ? "loading" : salarys
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [...salarys],
      },
    ],
  };

  return (
    <div>
      <div className="mixed-chart">
        <Chart
          options={charts.options}
          series={charts.series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default AmountVacancy;
