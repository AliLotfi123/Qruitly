import gql from "graphql-tag";

export const ADD_VACANCY = gql`
  mutation AddVacancy(
    $name: String
    $filterdBudget: Int
    $filterdSalary: Int
    $tags: jsonb
    $description: String
  ) {
    insert_vacancy(
      objects: {
        name: $name
        tags: $tags
        budget: $filterdBudget
        salary: $filterdSalary
        description: $description
        status: "Open"
        user_id: 1
      }
    ) {
      returning {
        name
        description
        id
        budget
        salary
        status
        tags
        user_id
      }
    }
  }
`;
