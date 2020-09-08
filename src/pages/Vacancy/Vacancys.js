import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/allvacancy";
import Table from "react-bootstrap/esm/Table";

import Row from "react-bootstrap/esm/Row";
import Vacancy from "../../components/Charts/Vacancy";

export default function Activities() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Row style={{ marginTop: "25px" }}>
      <div className=" col-lg-12 col-md-12 ">
        <div className="AddForm ">
          <Table className="table_background">
            <thead>
              <tr>
                <th>Vacancy</th>
                <th>Tags</th>
                <th>Budget</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.vacancy.map((vacancy) => {
                return <Vacancy vacancy={vacancy} />;
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </Row>
  );
}
