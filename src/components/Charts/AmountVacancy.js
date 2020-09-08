import React from "react";
import Chart from "react-apexcharts";
import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/amountvanacy.js";

function AmountVacancy() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  const vacancys = data.vacancy.map((vacancy) => vacancy.status);

  function byStatus(status) {
    const filterd = data.vacancy.filter(
      (candidates) => candidates.status === status
    );
    return filterd.length;
  }

  const statusses = ["Open", "In Progress", "Closed"];
  const lengths = statusses.map(byStatus);

  const charts = {
    chartOptions: {
      labels: statusses,
    },
    series: lengths,
    sparkline: {
      enabled: false,
    },
  };

  return (
    <div>
      <div className="mixed-chart">
        <Chart
          options={charts.chartOptions}
          series={charts.series}
          dataLabels={false}
          type="donut"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default AmountVacancy;
