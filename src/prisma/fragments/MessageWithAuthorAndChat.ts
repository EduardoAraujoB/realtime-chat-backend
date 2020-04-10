export default `
  fragment MessageWithAuthorAndChat on Message {
    id
    content
    createdAt
    updatedAt
    author {
      id
      name
      email
      createdAt
      updatedAt
    }
    chat {
      id
      name
      createdAt
      updatedAt
      owner {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
