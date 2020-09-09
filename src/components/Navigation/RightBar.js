import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_ACCOUNT_DETAILS } from "../../graphql/userDetails";

import Row from "react-bootstrap/esm/Row";
export default function TopBar() {
  const { loading, error, data } = useQuery(GET_ACCOUNT_DETAILS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <>
      {data.user.map((user) => {
        return (
          <Row>
            Welcome {user.isRecruiter ? "Recruiter" : "Employer"}{" "}
            {user.first_name}, {user.last_name}
          </Row>
        );
      })}
    </>
  );
}
