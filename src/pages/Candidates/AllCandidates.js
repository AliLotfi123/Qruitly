import React from "react";
import Chart from "react-apexcharts";
import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_CANDIDATES } from "../../graphql/amountcandidate";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import MenuItems from "../../components/Navigation/MenuItems";
import LeftBar from "../../components/Navigation/LeftBar";
import RightBar from "../../components/Navigation/RightBar";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_CANDIDATES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data);

  return (
    <>
      <div>Hoi</div>

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
                <div className="AddForm">
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Skills</th>
                        <th>Price</th>
                        <th>Salary</th>
                      </tr>
                    </thead>

                    {data.candidate.map((candidates) => (
                      <tbody>
                        <tr>
                          <td>{candidates.first_name}</td>
                          <td>{candidates.tags.join(" ")}</td>
                          <td>{candidates.price}</td>
                          <td>{candidates.salary}</td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AmountCandidate;
