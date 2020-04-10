export default `
  fragment ChatWithOwnerAndMessages on Chat {
    id
    name
    createdAt
    updatedAt
    owner {
      id
      name
      email
      createdAt
      updatedAt
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
