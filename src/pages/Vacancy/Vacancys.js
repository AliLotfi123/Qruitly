import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/allvacancy";
import Table from "react-bootstrap/esm/Table";

import Row from "react-bootstrap/esm/Row";

export default function Activities() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Row style={{ marginTop: "25px" }}>
      <div className=" col-lg-12 col-md-12 ">
        <div className="AddForm ">
          <Table striped hover>
            <thead>
              <tr>
                <th>Vacancy</th>
                <th>Tags</th>
                <th>Budget</th>
                <th>Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            {data.vacancy.map((vacancys) => (
              <tbody>
                <tr
                  class={
                    vacancys.status === "Open"
                      ? "table-success"
                      : vacancys.status === "In Progress"
                      ? "table-warning"
                      : vacancys.status === "Closed"
                      ? "table-danger"
                      : ""
                  }
                >
                  <td>{vacancys.name}</td>

                  <td>{vacancys.tags.join(" ")} </td>
                  <td>{vacancys.budget}</td>
                  <td>{vacancys.salary}</td>
                  <td>{vacancys.status}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </Row>
  );
}
