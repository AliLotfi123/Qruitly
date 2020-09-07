import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_CANDIDATES } from "../../graphql/amountcandidate";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

function AmountCandidate() {
  const { loading, error, data } = useSubscription(GET_ALL_CANDIDATES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data);

  return (
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
                <th>Price</th>
              </tr>
            </thead>

            {data.candidate.map((candidates) => (
              <tbody>
                <tr>
                  <td>{candidates.first_name}</td>
                  <td>{candidates.tags.join(" ")}</td>
                  <td>{candidates.description}</td>
                  <td>{candidates.price}</td>
                  <td>{candidates.salary}</td>
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
