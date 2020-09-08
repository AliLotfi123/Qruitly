import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { GET_ACCOUNT_DETAILS } from "../../graphql/userDetails";

export default function TopBar() {
  const { loading, error, data } = useQuery(GET_ACCOUNT_DETAILS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <>
      {data.user.map((user) => {
        return (
          <>
            {user.isRecruiter ? (
              <Link to="/addcandidate">Add Candidate</Link>
            ) : (
              <Link to="/addcandidate">Add Vacancys</Link>
            )}
          </>
        );
      })}
    </>
  );
}
