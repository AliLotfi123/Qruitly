import React from "react";
import Chart from "react-apexcharts";
import { useSubscription } from "@apollo/react-hooks";

import { RECIEVED_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import MenuItems from "../../components/Navigation/MenuItems";
import LeftBar from "../../components/Navigation/LeftBar";
import RightBar from "../../components/Navigation/RightBar";
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
    const [first, ...rest] = messages;
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

  return (
    <>
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
          </Col>
        </Row>
      </Container>

      <Container fluid></Container>
    </>
  );
}

export default AmountCandidate;
