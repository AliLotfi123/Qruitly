import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MenuItems from "../../components/Navigation/MenuItems";
import LeftBar from "../../components/Navigation/LeftBar";
import RightBar from "../../components/Navigation/RightBar";

import Vacancys from "./Vacancys";
export default function Activities() {
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

          <Vacancys />
        </Col>
      </Row>
    </Container>
  );
}
