import React from "react";

import { useSubscription } from "@apollo/react-hooks";
import { RECIEVED_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/esm/Table";
import ReceivedMessages from "../../pages/Message/ReceivedMessages";

export default function Messages() {
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

  console.log("this is senders", senders);

  const entries = Object.entries(senders);

  console.log("This is entries", entries);

  const sections = entries.slice(0, 5).map((entry) => {
    const [sender, messages] = entry;
    const [first, ...rest] = messages;
    return (
      <>
        <tr>
          <td> {sender} </td>
          <td> {first.subject} </td>
          <td> {first.text} </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <Row style={{ marginTop: "25px" }}>
        <div className=" col-lg-12 col-md-12">
          <div className="FirstGraph">
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
    </>
  );
}
