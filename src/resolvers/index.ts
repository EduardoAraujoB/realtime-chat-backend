import UserQuerys from './queries/user';

import UserMutations from './mutations/user';
import ChatMutations from './mutations/chat';

export default {
  Query: {
    ...UserQuerys,
  },
  Mutation: {
    ...UserMutations,
    ...ChatMutations,
  },
};
