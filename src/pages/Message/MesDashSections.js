import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import expand from "./img/expand.svg";

import "./MessageSection.css";

import NewMessage from "./NewMessage";
import ExtraMessages from "./ExtraMessages";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function MesDashSections({ entry }) {
  const [sender, messages] = entry;
  const [open, setOpen] = useState(false);
  const [first, ...rest] = messages;

  function toggleCollapse() {
    console.log("This is open?", open);
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <Row key={sender}>
        <Col> {sender.slice(0, 12)}... </Col>
        <Col> {first.subject.slice(0, 10)}... </Col>

        <Col>
          <NewMessage sender={sender} receiver={"2"} />
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
