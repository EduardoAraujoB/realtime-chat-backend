import UserQuerys from './queries/user';
import UserMutations from './mutations/user';

export default {
  Query: {
    ...UserQuerys,
  },
  Mutation: {
    ...UserMutations,
  },
};
