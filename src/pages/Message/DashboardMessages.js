import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSubscription } from "@apollo/react-hooks";

import { RECIEVED_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";

import MesDashSections from "./MesDashSections";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

function MessageTable() {
  const { loading, error, data } = useSubscription(RECIEVED_MESSAGES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  const senders = {};
  data.messages.forEach((message) => {
    const { sender } = message;
    const value = senders[sender];
    if (value) {
      value.push(message);
    } else {
      senders[sender] = [message];
    }
  });

  const entries = Object.entries(senders);

  const sections = entries.slice(0, 5).map((entry) => {
    return <MesDashSections key={entry[0]} entry={entry} />;
  });

  return (
    <Container className="containterCSS">
      <Row className="vacancysRow">
        <Col>Sender</Col>
        <Col>Subject</Col>
        <Col>Action</Col>
      </Row>
      {sections}
    </Container>
  );
}

export default MessageTable;
