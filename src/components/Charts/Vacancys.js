import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_VACANCYS } from "../../graphql/allvacancy";
import Table from "react-bootstrap/esm/Table";
import Vacancy from "./Vacancy";

export default function Activities() {
  const { loading, error, data } = useSubscription(GET_ALL_VACANCYS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
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
        {data.vacancy.slice(0, 4).map((vacancy) => {
          return <Vacancy vacancy={vacancy} />;
        })}
      </tbody>
    </Table>
  );
}
