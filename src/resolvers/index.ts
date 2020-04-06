import bcrypt from 'bcryptjs';

import { Prisma } from '../prisma/generated/prisma-client';

import UserQuerys from './queries/user';

const prisma = new Prisma();

export default {
  Query: {
    ...UserQuerys,
  },
  Mutation: {
    user: async (_parent: null, { name, email, password }) => {
      const password_hash = await bcrypt.hash(password, 10);
      const user = await prisma.createUser({
        name,
        email,
        password: password_hash,
      });

      return user;
    },
  },
};
