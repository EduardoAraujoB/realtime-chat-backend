import { Prisma } from '../../prisma/generated/prisma-client';

import MessageWithAuthorAndChat from '../../prisma/fragments/MessageWithAuthorAndChat';

const prisma = new Prisma();

export default {
  messages: () => prisma.messages().$fragment(MessageWithAuthorAndChat),
  message: (_parent: null, { id }) =>
    prisma.message({ id }).$fragment(MessageWithAuthorAndChat),
};
