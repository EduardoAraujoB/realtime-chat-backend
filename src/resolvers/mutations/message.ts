import { Prisma } from '../../prisma/generated/prisma-client';

const prisma = new Prisma();

export default {
  message(_parent: null, { authorId, chatId, content }) {
    const message = prisma.createMessage({
      content,
      author: {
        connect: { id: authorId },
      },
      chat: {
        connect: { id: chatId },
      },
    });
    return message;
  },
};
