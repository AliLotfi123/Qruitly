import gql from "graphql-tag";

export const GET_ALL_MESSAGES = gql`
  subscription Allmessages {
    user(where: { id: { _eq: 4 } }) {
      candidates(order_by: { updated_at: desc }) {
        first_name
        status
        contacts {
          subject
          vacancy {
            name
          }
        }
      }
    }
  }
`;
