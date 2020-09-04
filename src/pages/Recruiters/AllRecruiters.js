import React from "react";
import Chart from "react-apexcharts";
import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_RECRUITERS } from "../../graphql/allrecruiters";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import MenuItems from "../../components/Navigation/MenuItems";
import LeftBar from "../../components/Navigation/LeftBar";
import RightBar from "../../components/Navigation/RightBar";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_RECRUITERS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data.user);

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
                        <th>Company Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                      </tr>
                    </thead>

                    {data.user.map((users) => (
                      <tbody>
                        <tr>
                          <td>{users.company_name}</td>
                          <td>{users.first_name}</td>
                          <td>{users.last_name}</td>
                          <td>{users.email}</td>
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
