import React from "react";

import Row from "react-bootstrap/esm/Row";

import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import MenuItems from "../../components/Navigation/MenuItems";
import LeftBar from "../../components/Navigation/LeftBar";
import RightBar from "../../components/Navigation/RightBar";
import MessageTable from "./MessageTable";

function ReceivedMessages({ recruiter }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-2 col-lg-2 col-md-12 col-sm-12 sidebarMenu">
            <MenuItems recruiter={recruiter} className="sidebarMenu" />
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
            <MessageTable recruiter={recruiter} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ReceivedMessages;
