export default `
  fragment UsersWithChats on User {
    id
    name
    email
    createdAt
    updatedAt
    chats {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
