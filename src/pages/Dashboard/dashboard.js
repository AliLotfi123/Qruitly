import React from "react";
import Menu from "../../components/Navigation/Menu";
import AmountVacancy from "../../components/Charts/AmountVacancy";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <AmountVacancy />
      <Menu />
    </>
  );
}
