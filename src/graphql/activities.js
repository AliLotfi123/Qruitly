import gql from "graphql-tag";

export const GET_ALL_ACTIVITIES = gql`
  subscription AllActivities {
    user(where: { id: { _eq: 1 } }, order_by: { updatedAt: desc }) {
      candidates {
        status
        contacts {
          subject
        }
      }
    }
  }
`;
