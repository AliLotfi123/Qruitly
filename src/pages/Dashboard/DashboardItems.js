import React from "react";
import AmountVacancy from "../../components/Charts/AmountVacancy";
import AmountCandidates from "../../components/Charts/AmountCandidates";

import standingperson from "./img/standingperson.svg";

import Row from "react-bootstrap/Row";

import "./Dashboard.css";
import Messages from "../../components/messages/Messages";
import Button from "react-bootstrap/esm/Button";

export default function DashboardItems() {
  return (
    <div>
      <Row style={{ marginTop: "25px" }}>
        <div className=" col-lg-4 col-md-12">
          <div className="FirstGraph">
            <p>Candidate Status</p>
            <AmountCandidates />
          </div>
          <div className="SecondGraph">
            <p>Vacancy Status</p>
            <AmountVacancy />
          </div>
        </div>
        {/* <div className=" col-lg-4 col-md-12">
          <div className="FourthGraph ">
            <p> Fourth</p>
            <AmountCandidates />
          </div>
        </div> */}

        {/* <div className=" col-lg-4 col-md-12">
          <div className="ThirdGraph ">
            <img
              src={standingperson}
              style={{ float: "right" }}
              alt="Login"
              className="imgDashboard"
            />
            <div className="text-dashboard">
              <h1>New vacancy</h1>
              <p>
                Offering discounts for better online a store can loyalty weapon
                into driving
              </p>
              <Button className="loginbtn" type="submit" onClick={"hoi"}>
                Login
              </Button>
            </div>
          </div>
        </div> */}

        {/* <div className=" col-lg-4 col-md-12">
          <div className="FifthGraph ">
            <p>Fifth</p>
            <AmountVacancy />
          </div>
        </div> */}

        {/* <div className=" col-lg-8 col-md-12">
          <div className="FifthGraph  ">
            <p>Sixth</p>

            <Messages />
          </div>
        </div> */}
      </Row>
    </div>
  );
}
