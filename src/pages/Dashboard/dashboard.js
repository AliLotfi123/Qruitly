import React from "react";
import Menu from "../../components/Navigation/Menu";
import AmountVacancy from "../../components/Charts/AmountVacancy";
import AmountCandidates from "../../components/Charts/AmountCandidates";
import "./Dashboard.css";
import Messages from "../../components/messages/Messages.js";

// flex row
// flex boxes

export default function Dashboard() {
  return (
    <div className="row">
      <Menu />
      <AmountCandidates />
      <AmountVacancy />
      <Messages />
    </div>
  );
}
