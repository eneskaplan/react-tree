import { FULFILLED_USERS } from '../constants/users';
import { userMapper } from '../mappers/users';

const map = {
  [FULFILLED_USERS]: userMapper
};

const mapper = store => next => action => {
  const func = map[action.type];
  return func
    ? next({
        ...action,
        data: func(action.data)
      })
    : next(action);
};

export default mapper;
