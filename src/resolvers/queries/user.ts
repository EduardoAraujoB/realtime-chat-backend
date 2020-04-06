import { Prisma } from '../../prisma/generated/prisma-client';

const prisma = new Prisma();

export default {
  users: () => prisma.users(),
  user: (_parent: null, { id }) => prisma.user({ id }),
};
