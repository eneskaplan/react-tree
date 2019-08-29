import { FULFILLED_USERS, REMOVE_USER, PENDING_USERS, REJECTED_USERS } from '../constants/users';

const initialState = {
  users: [],
  pending: false,
  error: {}
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FULFILLED_USERS:
      return {
        ...state,
        users: action.data,
        pending: false
      };
    case PENDING_USERS:
      return {
        ...state,
        pending: true
      };

    case REMOVE_USER:
      return {
        ...state,
        pending: false,
        users: action.data
      };
    case REJECTED_USERS:
      return {
        ...state,
        error: action.error,
        pending: false
      };

    default:
      return state;
  }
};

export default users;
