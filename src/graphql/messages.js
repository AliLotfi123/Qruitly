import gql from "graphql-tag";

export const GET_ALL_MESSAGES = gql`
  subscription Allmessages {
    contact {
      candidate_id
      description
      id
      sender
      subject
      vacancy_id
    }
  }
`;
