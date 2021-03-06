import React from "react";
import "./Dashboard.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import MenuItems from "../../components/Navigation/MenuItems";
import LeftBar from "../../components/Navigation/LeftBar";
import RightBar from "../../components/Navigation/RightBar";
import DashboardItems from "./DashboardItems";
import "bootstrap/dist/css/bootstrap.min.css";
// flex row
// flex boxes

export default function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col className="col-2 col-lg-2 col-md-12 col-sm-12 sidebarMenu">
          <MenuItems className="sidebarMenu" />
        </Col>

        <Col className=" col-10 ">
          <Col className="offset-2 col-md-12 topBar ">
            <div style={{ float: "left" }}>
              <LeftBar />
            </div>
            <div style={{ float: "right" }}>
              <RightBar />
            </div>
          </Col>
          <DashboardItems />
        </Col>
      </Row>
    </Container>

    // <Container fluid>
    //   <Row>
    //     <Col>
    //
    //
    //     </Col>
    //     <Col>
    //
    //
    //     </Col>
    //     <Col></Col>
    //     <Col>
    //
    //     </Col>
    //   </Row>
    // </Container>
  );
}
