import gql from "graphql-tag";

export const GET_ALL_VACANCYS = gql`
  subscription Allvacancys {
    vacancy {
      id
      name
      salary
      status
      tags
      description
    }
  }
`;
