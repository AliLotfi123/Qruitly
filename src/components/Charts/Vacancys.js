import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/allvacancy";

import Vacancy from "./Vacancy";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

export default function Activities() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Container className="containterCSS" fluid>
      <Row className="vacancysRow">
        <Col>Vacancy Name</Col>
        <Col>Vacancy Status</Col>
        <Col>Max Budget</Col>
        <Col>Expected Salary</Col>
        <Col>Actions</Col>
      </Row>
      {data.vacancy.slice(0, 5).map((vacancy) => {
        return <Vacancy vacancy={vacancy} />;
      })}
    </Container>
  );
}
