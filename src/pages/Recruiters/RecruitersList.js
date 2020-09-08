import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_RECRUITERS } from "../../graphql/allrecruiters";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_RECRUITERS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data.user);

  return (
    <Row style={{ marginTop: "25px" }} className=" col-lg-12 col-md-12 AddForm">
      <Container className="containterCSS" fluid>
        <Row className="vacancysRow">
          <Col>Company Name</Col>
          <Col>First Name</Col>
          <Col>Last Name</Col>
          <Col>Email Address</Col>
        </Row>

        {data.user.map((users) => (
          <Row key={users.id}>
            <Col>{users.company_name}</Col>
            <Col>{users.first_name}</Col>
            <Col>{users.last_name}</Col>
            <Col>{users.email}</Col>
          </Row>
        ))}
      </Container>
    </Row>
  );
}

export default AmountCandidate;
