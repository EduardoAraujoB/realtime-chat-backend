import { Prisma } from '../../prisma/generated/prisma-client';
const prisma = new Prisma();

import ChatWithOwnerAndMessages from '../../prisma/fragments/ChatWithOwnerAndMessages';

export default {
  chats: () => prisma.chats().$fragment(ChatWithOwnerAndMessages),
  chat: (_parent: null, { id }) =>
    prisma.chat({ id }).$fragment(ChatWithOwnerAndMessages),
};
