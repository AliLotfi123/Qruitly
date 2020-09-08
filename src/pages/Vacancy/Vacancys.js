import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/allvacancy";

import Row from "react-bootstrap/esm/Row";
import Vacancy from "../../components/Charts/Vacancy";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

export default function Activities() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Row style={{ marginTop: "25px" }} className=" col-lg-12 col-md-12 AddForm">
      <Container className="containterCSS" fluid>
        <Row className="vacancysRow">
          <Col>Vacancy Name</Col>
          <Col>Vacancy Status</Col>
          <Col>Max Budget</Col>
          <Col>Expected Salary</Col>
          <Col>Actions</Col>
        </Row>
        {data.vacancy.map((vacancy) => {
          return <Vacancy vacancy={vacancy} />;
        })}
      </Container>
    </Row>
  );
}
