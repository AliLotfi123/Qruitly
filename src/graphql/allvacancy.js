import gql from "graphql-tag";

export const GET_ALL_VACANCYS = gql`
  subscription AllVacancys {
    vacancy(order_by: { updated_at: desc }) {
      name
      tags
      budget
      salary
      status
    }
  }
`;
