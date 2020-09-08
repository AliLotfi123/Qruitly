import gql from "graphql-tag";

export const GET_ACCOUNT_DETAILS = gql`
  query MyAccount {
    user(where: { id: { _eq: 1 }, isRecruiter: { _eq: false } }) {
      id
      company_name
      first_name
      last_name
      isRecruiter
      email
      password
    }
  }
`;
