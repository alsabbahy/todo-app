// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    switch (context.method) {
    case 'create':
      context.data = {
        ...context.data,
        userId: context?.params?.user?._id,
      };
      break;
    case 'update':
      if (context.data.finished) {
        context.data = {
          ...context.data,
          userId: context?.params?.user?._id,
        };
      }
      break;
    case 'patch':
      if (context.data.finished) {
        context.data = {
          ...context.data,
          userId: context?.params?.user?._id,
        };
      }
      break;
    default:
      break;
    }
    return context;
  };
};
