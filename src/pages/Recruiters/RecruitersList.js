import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_RECRUITERS } from "../../graphql/allrecruiters";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_RECRUITERS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data.user);

  return (
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
  );
}

export default AmountCandidate;
