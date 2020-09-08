import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_CANDIDATES } from "../../graphql/amountcandidate";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_CANDIDATES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data);

  return (
    <Row style={{ marginTop: "25px" }} className=" col-lg-12 col-md-12 AddForm">
      <Container className="containterCSS" fluid>
        <Row className="vacancysRow">
          <Col>First Name</Col>
          <Col>Description</Col>
          <Col>Price</Col>
          <Col>Salary</Col>
        </Row>

        {data.candidate.map((candidates) => (
          <Row key={candidates.id}>
            <Col>
              <Row>
                <Col>{candidates.first_name}</Col>
              </Row>
              <Row>
                <Col className="subTag">{candidates.tags.join(" ")}</Col>
              </Row>
            </Col>

            <Col>{candidates.description}</Col>
            <Col>{candidates.price}</Col>
            <Col>{candidates.salary}</Col>
          </Row>
        ))}
      </Container>
    </Row>
  );
}

export default AmountCandidate;
