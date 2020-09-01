import React from "react";
import Menu from "../../components/Navigation/Menu";
import AmountVacancy from "../../components/Charts/AmountVacancy";

export default function dashboard() {
  return (
    <div>
      <AmountVacancy />
      <Menu />
    </div>
  );
}
