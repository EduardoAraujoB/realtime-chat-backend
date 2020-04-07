import { Prisma } from '../../prisma/generated/prisma-client';

const prisma = new Prisma();

import UserWithChats from '../../prisma/fragments/UserWithChats';

export default {
  users: () => prisma.users().$fragment(UserWithChats),
  user: (_parent: null, { id }) => prisma.user({ id }).$fragment(UserWithChats),
};
