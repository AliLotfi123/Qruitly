import React from "react";
import Chart from "react-apexcharts";
import { useQuery } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/amountvanacy.js";

function AmountVacancy() {
  const { loading, error, data } = useQuery(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data.vacancy);

  const salarys = data.vacancy.map((vacan) => {
    console.log(vacan.salary);
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
        categories: [!salarys ? "loading" : salarys],
      },
    },
    series: [
      {
        name: "series-1",
        data: [!salarys ? "loading" : salarys],
      },
    ],
  };

  return (
    <div>
      <div className="mixed-chart">
        <Chart
          options={charts.options}
          series={charts.series}
          type="line"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default AmountVacancy;
