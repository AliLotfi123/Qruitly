import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSubscription } from "@apollo/react-hooks";

import { RECIEVED_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";

import MessageSection from "./MessageSection";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

function MessageTable() {
  const { loading, error, data } = useSubscription(RECIEVED_MESSAGES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  // console.log(data.messages);

  // data.messages.map((message) => {
  //   console.log("This is the Receiver", message.user.id);
  //   console.log("This is the sender", message.userBySender.id);
  //   return message.user;
  // });

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

  const sections = entries.map((entry) => {
    return <MessageSection key={entry[0]} entry={entry} />;
  });

  return (
    <Container
      fluid
      className="containterCSS AddForm"
      style={{ marginTop: "25px" }}
    >
      <Row className="vacancysRow">
        <Col>My Company</Col>
        <Col>Sender</Col>
        <Col>Subject</Col>
        <Col>Message</Col>
        <Col>Action</Col>
      </Row>
      {sections}
    </Container>
  );
}

export default MessageTable;
