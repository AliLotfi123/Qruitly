import React from "react";

import { useQuery } from "@apollo/react-hooks";

import { GET_ACCOUNT_EMPLOYER } from "../../graphql/userDetails";
import { GET_ACCOUNT_RECRUITER } from "../../graphql/userDetails";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

export default function MyAccount({ recruiter }) {
  const { loading, error, data } = useQuery(
    recruiter ? GET_ACCOUNT_RECRUITER : GET_ACCOUNT_EMPLOYER
  );

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Row style={{ marginTop: "25px" }} className=" col-lg-12 col-md-12 AddForm">
      <Container className="containterCSS" fluid>
        {data.user.map((user) => {
          return (
            <Row className="vacancysRow">
              <Col>{user.id}</Col>
              <Col>{user.company_name}</Col>
              <Col>
                {user.first_name}, {user.last_name}{" "}
              </Col>
              <Col>Welcome {user.isRecruiter ? "Recruiter" : "Employer"}</Col>
            </Row>
          );
        })}
      </Container>
    </Row>
  );
}
