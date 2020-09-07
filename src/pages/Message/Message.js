import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { RECIEVED_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(RECIEVED_MESSAGES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data.messages);

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

  console.log("this is senders", senders);

  const entries = Object.entries(senders);

  console.log("This is entries", entries);

  const sections = entries.map((entry) => {
    const [sender, messages] = entry;
    console.log("AmountCandidate -> messages", messages);
    console.log("AmountCandidate -> sender", sender);
    const [first, ...rest] = messages;
    console.log("AmountCandidate -> rest", ...rest);
    console.log("AmountCandidate -> first", first);
    return (
      <>
        <tr>
          <td> {sender} </td>
          <td> {first.subject} </td>
          <td> {first.text} </td>
        </tr>
        {rest.map((message) => {
          return (
            <tr>
              <td></td>
              <td>{message.subject}</td>
              <td>{message.text}</td>
            </tr>
          );
        })}
      </>
    );
  });
  console.log("AmountCandidate -> sections", sections);
  return (
    <Row style={{ marginTop: "25px" }}>
      <div className=" col-lg-12 col-md-12">
        <div className="FirstGraph">
          <p>Candidate Status</p>
          <Table striped hover>
            <thead>
              <tr>
                <th>Sender</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            {sections}
          </Table>
        </div>
      </div>
    </Row>
  );
}

export default AmountCandidate;
