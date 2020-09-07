import React from "react";
import Collapse from "react-bootstrap/esm/Collapse";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function ExtraMessages({ rest, open }) {
  return (
    <>
      {rest.map((message) => {
        return (
          <Collapse in={open} key={message.id}>
            <Row>
              <Col></Col>
              <Col>{message.subject}</Col>
              <Col>{message.text}</Col>
              <Col></Col>
            </Row>
          </Collapse>
        );
      })}
    </>
  );
}
