import gql from "graphql-tag";

export const ADD_CANDIDATE = gql`
  mutation AddCandidate(
    $name: String
    $filterdBudget: Int
    $filterdSalary: Int
    $tags: jsonb
    $description: String
  ) {
    insert_candidate(
      objects: {
        first_name: $name
        tags: $tags
        price: $filterdBudget
        salary: $filterdSalary
        description: $description
        status: "Open"
        user_id: 2
      }
    ) {
      returning {
        first_name
        description
        id
        price
        salary
        status
        tags
        user_id
      }
    }
  }
`;
