import UserQuerys from './queries/user';
import ChatQuerys from './queries/chat';
import MessageQuerys from './queries/message';

import UserMutations from './mutations/user';
import ChatMutations from './mutations/chat';
import MessageMutations from './mutations/message';

export default {
  Query: {
    ...UserQuerys,
    ...ChatQuerys,
    ...MessageQuerys,
  },
  Mutation: {
    ...UserMutations,
    ...ChatMutations,
    ...MessageMutations,
  },
};
