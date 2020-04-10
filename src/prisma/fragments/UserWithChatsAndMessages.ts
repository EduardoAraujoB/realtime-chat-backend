export default `
  fragment UsersWithChatsAndMessages on User {
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
      messages {
        id
        content
        createdAt
        updatedAt
      }
    }
    messages {
      id
      content
      createdAt
      updatedAt
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
