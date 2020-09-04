import gql from "graphql-tag";

export const GET_ALL_MESSAGES = gql`
  subscription Allmessages {
    user(where: { id: { _eq: 2 } }) {
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

export const SEND_MESSAGE = gql`
  mutation SendMessage {
    insert_messages(
      objects: {
        reciever: 2
        sender: "a.lotfi@outlook.com"
        subject: "How are you"
        text: "Oke"
      }
    ) {
      returning {
        reciever
        sender
        subject
        text
        timestamp
      }
    }
  }
`;

export const RECIEVED_MESSAGES = gql`
  subscription ReceivedMessages {
    messages(where: { reciever: { _eq: 1 } }, order_by: { timestamp: desc }) {
      sender
      subject
      text
      timestamp
      id
    }
  }
`;
