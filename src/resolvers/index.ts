import UserQuerys from './queries/user';
import ChatQuerys from './queries/chat';

import UserMutations from './mutations/user';
import ChatMutations from './mutations/chat';

export default {
  Query: {
    ...UserQuerys,
    ...ChatQuerys,
  },
  Mutation: {
    ...UserMutations,
    ...ChatMutations,
  },
};
