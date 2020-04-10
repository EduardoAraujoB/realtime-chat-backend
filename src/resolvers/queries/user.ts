import { Prisma } from '../../prisma/generated/prisma-client';

const prisma = new Prisma();

import UserWithChatsAndMessages from '../../prisma/fragments/UserWithChatsAndMessages';

export default {
  users: () => prisma.users().$fragment(UserWithChatsAndMessages),
  user: (_parent: null, { id }) =>
    prisma.user({ id }).$fragment(UserWithChatsAndMessages),
};
