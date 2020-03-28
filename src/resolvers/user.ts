import { Prisma } from '../prisma/generated/prisma-client';

const prisma = new Prisma();

export default {
  Query: {
    users: () => prisma.users(),
  },
};
