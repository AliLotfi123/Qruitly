import gql from "graphql-tag";

export const GET_ALL_CANDIDATES = gql`
  subscription Allcandidates {
    candidate(
      where: { recruiter_id: { _eq: 4 }, user: {} }
      order_by: { updated_at: asc }
    ) {
      id
      first_name
      tags
      price
      salary
      status
      description
    }
  }
`;

// export const GET_ALL_CANDIDATES = gql`
//   subscription Allcandidates {
//     candidate {
//       id
//       first_name
//       tags
//       price
//       salary
//       status
//       description
//     }
//   }
// `;

// export const GET_ALL_STATUS_OPEN = gql`
//   subscription AllOpen {
//     candidate(where: { status: { _eq: "Open" } }) {
//       id
//     }
//   }
// `;

// export const GET_ALL_STATUS_SUGGESTED = gql`
//   subscription AllSuggested {
//     candidate(where: { status: { _eq: "Suggested" } }) {
//       id
//     }
//   }
// `;

// export const GET_ALL_STATUS_REJECTED = gql`
//   subscription AllRejected {
//     candidate(where: { status: { _eq: "Rejected" } }) {
//       id
//     }
//   }
// `;

// export const GET_ALL_STATUS_ACCEPTED = gql`
//   subscription AllAccepted {
//     candidate(where: { status: { _eq: "Accepted" } }) {
//       id
//     }
//   }
// `;
