export default `
  fragment ChatWithOwner on Chat {
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
  }
`;
