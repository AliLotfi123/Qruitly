import gql from "graphql-tag";

export const GET_ALL_RECRUITERS = gql`
  query AllRecruiters {
    user(where: { isRecruiter: { _eq: true } }) {
      company_name
      first_name
      last_name
      email
    }
  }
`;
