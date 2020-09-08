import gql from "graphql-tag";

export const GET_ALL_CANDIDATES = gql`
  query AllCandidates {
    user(where: { isRecruiter: { _eq: true } }) {
      candidates {
        first_name
        price
        salary
        status
        tags
        description
      }
    }
  }
`;
