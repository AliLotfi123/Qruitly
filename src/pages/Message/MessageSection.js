import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import expand from "./img/expand.svg";

import "./MessageSection.css";

import NewMessage from "./NewMessage";
import ExtraMessages from "./ExtraMessages";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function MessageSection({ entry }) {
  const [sender, messages] = entry;
  const [open, setOpen] = useState(false);
  const [first, ...rest] = messages;

  function toggleCollapse() {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <Row key={sender}>
        <Col> {first.user.company_name} </Col>
        <Col> {first.userBySender.company_name} </Col>
        <Col> {first.subject} </Col>
        <Col> {first.text} </Col>
        <Col>
          <NewMessage
            sender={first.user.company_name}
            receiver={first.userBySender.id}
            company_name={first.userBySender.company_name}
            sender_name={first.user.company_name}
          />
          <Button
            className="button-dashboard"
            size="sm"
            variant={"primary"}
            onClick={toggleCollapse}
          >
            <img className="buttonimg" src={expand} alt="Dashboard Button" />
          </Button>
        </Col>
      </Row>

      <ExtraMessages rest={rest} open={open} />
    </React.Fragment>
  );
}
