import React from "react";
import AmountVacancy from "../../components/Charts/AmountVacancy";
import AmountCandidates from "../../components/Charts/AmountCandidates";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Messages from "../../components/messages/Messages.js";
import "./Dashboard.css";

export default function DashboardItems() {
  return (
    <div>
      <Row>
        <div className=" col-lg-4 col-md-12">
          <div className="FirstGraph">
            <p>First</p>
            <AmountCandidates />
          </div>
          <div className="SecondGraph">
            <p>Second</p>
            <AmountVacancy />
          </div>
        </div>
        <div className=" col-lg-4 col-md-12">
          <div className="FourthGraph ">
            <p> Fourth</p>
            <AmountCandidates />
          </div>
        </div>

        <div className=" col-lg-4 col-md-12">
          <div className="ThirdGraph ">
            <p>Third</p>
            <AmountVacancy />
          </div>
        </div>

        <div className=" col-lg-4 col-md-12">
          <div className="FifthGraph ">
            <p>Fifth</p>
            <AmountVacancy />
          </div>
        </div>

        <div className=" col-lg-8 col-md-12">
          <div className="FifthGraph  ">
            <p>Sixth</p>

            <AmountCandidates />
            <AmountCandidates />
          </div>
        </div>
      </Row>
    </div>
  );
}
