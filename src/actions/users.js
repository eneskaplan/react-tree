import { REMOVE_USER, FULFILLED_USERS, REJECTED_USERS, PENDING_USERS } from '../constants/users';
import { users } from '../dummy';

const deleteUser = (users, id) => {
  for (let i in users) {
    if (users[i].id === id) {
      users.splice(i, 1);
      break;
    }
    users[i].children && deleteUser(users[i].children, id);
  }
  return users;
};

const pending = () => ({
  type: PENDING_USERS
});

const rejected = () => ({
  type: REJECTED_USERS
});

const fulfilled = response => ({
  type: FULFILLED_USERS,
  data: response
});

const removeUser = users => ({
  type: REMOVE_USER,
  data: users
});

export const fetchUsers = () => dispatch => {
  // dispatch(pending());
  dispatch(fulfilled(users));
};

export const remove = (id) => (dispatch, getState) => {
  const state = getState();
  const { users } = state.users;
  const _users = users.slice();
  dispatch(removeUser(deleteUser(_users, id)));
};
