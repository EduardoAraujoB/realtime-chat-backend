import { Prisma } from '../../prisma/generated/prisma-client';
const prisma = new Prisma();

import ChatWithOwner from '../../prisma/fragments/ChatWithOwner';

export default {
  chats: () => prisma.chats().$fragment(ChatWithOwner),
  chat: (_parent: null, { id }) => prisma.chat({ id }).$fragment(ChatWithOwner),
};
