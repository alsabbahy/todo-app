import * as authentication from '@feathersjs/authentication';
import processTodo from '../../hooks/process-todo';
import populateUser from '../../hooks/populate-user';
import strictUserQuery from '../../hooks/strict-user-query';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate('jwt'), strictUserQuery()],
    find: [],
    get: [],
    create: [processTodo()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
