import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { GET_ACCOUNT_EMPLOYER } from "../../graphql/userDetails";
import { GET_ACCOUNT_RECRUITER } from "../../graphql/userDetails";

export default function TopBar({ recruiter }) {
  const { loading, error, data } = useQuery(
    recruiter ? GET_ACCOUNT_RECRUITER : GET_ACCOUNT_EMPLOYER
  );

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
