import gql from "graphql-tag";

export const GET_ACCOUNT_RECRUITER = gql`
  query MyAccount {
    user(where: { id: { _eq: 2 }, isRecruiter: { _eq: true } }) {
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

export const GET_ACCOUNT_EMPLOYER = gql`
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
