import React from "react";

import { useSubscription } from "@apollo/react-hooks";
import { GET_ALL_MESSAGES } from "../../graphql/messages";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/esm/Table";

export default function Messages() {
  const { loading, error, data } = useSubscription(GET_ALL_MESSAGES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log("What is message data", data);

  return (
    <>
      <div>
        <Table striped hover>
          <thead>
            <tr>
              <th>Vacancy</th>
              <th>Candidate</th>
              <th>Status</th>
              <th>Subject</th>
            </tr>
          </thead>
          {data.user.map(
            (users) => (
              console.log("The are the Users", users),
              console.log(
                "The are the messages",
                users.candidates.map((candidate) => (
                  <tbody>
                    <tr
                      class={
                        users.candidates.status === "Accepted"
                          ? "table-success"
                          : users.candidates.status === "Open"
                          ? "table-primary"
                          : users.candidates.status === "Closed"
                          ? "table-danger"
                          : users.candidates.status === "In Progress"
                          ? "table-warning"
                          : ""
                      }
                    >
                      <td>{candidate.contacts.subject}</td>
                      {console.log("Does this work?", candidate.contacts)}
                      <td>{users.candidates.first_name}</td>
                      <td>{users.candidates.status}</td>
                      {/* <td>{users.candidates.contacts.subject}</td> */}
                    </tr>
                  </tbody>
                ))
              )
              // (
              //   <tbody>
              //     <tr
              //       class={
              //         users.candidates.status === "Accepted"
              //           ? "table-success"
              //           : users.candidates.status === "Open"
              //           ? "table-primary"
              //           : users.candidates.status === "Closed"
              //           ? "table-danger"
              //           : users.candidates.status === "In Progress"
              //           ? "table-warning"
              //           : ""
              //       }
              //     >
              //       <td>{users.candidates.contact}</td>

              //       <td>{users.candidates.first_name}</td>
              //       <td>{users.candidates.status}</td>
              //       {/* <td>{users.candidates.contacts.subject}</td> */}
              //     </tr>
              //   </tbody>
              // )
            )
          )}
        </Table>
      </div>
    </>
  );
}
