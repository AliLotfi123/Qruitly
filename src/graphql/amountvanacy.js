import gql from "graphql-tag";

export const GET_ALL_VACANCYS = gql`
  subscription Allvacancys {
    vacancy(where: { user_id: { _eq: 1 } }, order_by: { updated_at: desc }) {
      id
      name
      salary
      status
      tags
      description
    }
  }
`;
