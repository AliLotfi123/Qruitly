import React from "react";
import Chart from "react-apexcharts";
import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_CANDIDATES } from "../../graphql/amountcandidate";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_CANDIDATES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log("alle info", data);

  function byStatus(status) {
    const filterd = data.candidate.filter(
      (candidates) => candidates.status === status
    );
    return filterd.length;
  }

  const statusses = ["Open", "Accepted", "Suggested", "Rejected"];
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
      <div className="donut">
        <Chart
          options={charts.chartOptions}
          series={charts.series}
          type="pie"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default AmountCandidate;
