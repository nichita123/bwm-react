
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  isAuth: false,
  isAdmin: false,
  errors: [],
  username: ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { isAuth: true, errors: [], username: action.userInfo.username, isAdmin: action.userInfo.isAdmin });
    case LOGIN_FAILURE:
      return Object.assign({}, state, { errors: action.errors });
    case LOGOUT:
      return Object.assign({}, state, { isAuth: false, username: '', isAdmin: false });
    default:
      return state;
  }
}
