import gql from "graphql-tag";

export const GET_ALL_MESSAGES = gql`
  subscription Allmessages {
    user(where: { id: { _eq: 1 } }) {
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
  mutation SendMessage(
    $sender: String
    $receiver: Int
    $subject: String
    $description: String
    $id: Int
  ) {
    insert_messages(
      objects: {
        reciever: $receiver
        sender: $sender
        subject: $subject
        text: $description
      }
    ) {
      returning {
        reciever
        sender
        subject
        text
        timestamp
        user {
          vacancies {
            status
          }
        }
      }
    }
    update_vacancy(
      where: { id: { _eq: $id } }
      _set: { status: "In Progress" }
    ) {
      returning {
        status
        id
      }
    }
  }
`;

export const RECIEVED_MESSAGES = gql`
  subscription ReceivedMessages {
    messages(
      where: { reciever: { _eq: 1 } }
      order_by: { timestamp: desc, user: {} }
    ) {
      sender
      subject
      text
      timestamp
      id
      user {
        id
        company_name
      }
      userBySender {
        id
        company_name
      }
    }
  }
`;
