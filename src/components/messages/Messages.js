import React from "react";

import { useSubscription, useQuery } from "@apollo/react-hooks";
import { GET_ALL_MESSAGES } from "../../graphql/messages";

export default function Messages() {
  const { loading, error, data } = useSubscription(GET_ALL_MESSAGES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data);

  return (
    <div>
      {data.contact.map((conta) => (
        <div key={conta.id}>
          <p className="">Message ID: {conta.id}</p>
          <p className="">Candidate ID: {conta.candidate_id}</p>
          <p className="">Vacancy ID: {conta.vacancy_id}</p>
          <p className="">Sender: {conta.sender}</p>
          <p className="">Subject: {conta.subject}</p>
          <p className="">Description: {conta.description}</p>
        </div>
      ))}
    </div>
  );
}
