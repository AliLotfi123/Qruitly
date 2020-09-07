import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSubscription } from "@apollo/react-hooks";

import { RECIEVED_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

import MessageSection from "./MessageSection";

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

  const sections = entries.map((entry) => {
    console.log(entry);
    return <MessageSection key={entry[0]} entry={entry} />;
  });

  return (
    <Row style={{ marginTop: "25px" }}>
      <div className=" col-lg-12 col-md-12">
        <div className="FirstGraph">
          <Table striped hover>
            <thead>
              <tr>
                <th>Sender</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{sections}</tbody>
          </Table>
        </div>
      </div>
    </Row>
  );
}

export default MessageTable;
