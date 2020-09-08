import gql from "graphql-tag";

export const GET_ALL_CANDIDATES = gql`
  subscription Allcandidates {
    candidate(where: { user_id: { _eq: 2 } }, order_by: { updated_at: desc }) {
      id
      first_name
      tags
      price
      salary
      status
      description
    }
  }
`;
