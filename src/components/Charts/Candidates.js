import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_CANDIDATES } from "../../graphql/allcandidates";

import Candidate from "./Candidate";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

export default function Candidates() {
  const { loading, error, data } = useSubscription(GET_ALL_CANDIDATES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Container className="containterCSS" fluid>
      <Row className="vacancysRow">
        <Col>Candidate Name</Col>
        <Col>Candidate Status</Col>
        <Col>Price</Col>
        <Col>Expected Salary</Col>
        <Col>Actions</Col>
      </Row>
      {data.user.map((candidates) => {
        return <Candidate candidates={candidates} />;
      })}
    </Container>
  );
}
