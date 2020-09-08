import React from "react";

import { useSubscription } from "@apollo/react-hooks";

import { GET_ALL_ACTIVITIES } from "../../graphql/activities";

export default function Activities() {
  const { loading, error, data } = useSubscription(GET_ALL_ACTIVITIES);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  return <div>{data.candidates}</div>;
}
