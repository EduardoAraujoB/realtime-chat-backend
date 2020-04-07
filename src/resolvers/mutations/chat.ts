import { Prisma } from '../../prisma/generated/prisma-client';

const prisma = new Prisma();

export default {
  chat(_parent: null, { userId, name }) {
    const chat = prisma.createChat({
      name,
      owner: {
        connect: { id: userId },
      },
    });

    return chat;
  },
};
