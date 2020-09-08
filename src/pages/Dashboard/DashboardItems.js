import React from "react";
import AmountVacancy from "../../components/Charts/AmountVacancy";
import AmountCandidates from "../../components/Charts/AmountCandidates";

import standingperson from "./img/standingperson.svg";

import Row from "react-bootstrap/Row";

import "./Dashboard.css";

import Button from "react-bootstrap/esm/Button";

import Vacancys from "../../components/Charts/Vacancys";
import DashboardMessages from "../Message/DashboardMessages";

export default function DashboardItems() {
  return (
    <div>
      <Row style={{ marginTop: "25px" }}>
        <div className=" col-lg-6 col-md-12">
          <div className="FirstGraph">
            <p>Candidate Status</p>
            <AmountCandidates />
          </div>
          <div className="SecondGraph" style={{ marginTop: "25px" }}>
            <p>Vacancy Status</p>
            <AmountVacancy />
          </div>
        </div>

        <div className=" col-lg-6 col-md-12">
          <div className="ThirdGraph ">
            <img
              src={standingperson}
              style={{ float: "right" }}
              alt="Login"
              className="imgDashboard"
            />
            <div className="text-dashboard">
              <h1>New Candidate</h1>
              <p>
                Offering discounts for better online a store can loyalty weapon
                into driving
              </p>
              <Button className="loginbtn" type="submit" onClick={"hoi"}>
                Add
              </Button>
            </div>
          </div>
        </div>

        <div className=" col-lg-4 col-md-12">
          <div className="FifthGraph ">
            <DashboardMessages />
          </div>
        </div>

        <div className=" col-lg-8 col-md-12">
          <div className="FifthGraph  ">
            <Vacancys />
          </div>
        </div>
      </Row>
    </div>
  );
}
