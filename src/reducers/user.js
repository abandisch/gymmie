import * as types from '../actions/types';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_VIA_EMAIL_REQUEST:
      return {};
    case types.LOGIN_VIA_EMAIL_SUCCESS:
      return { ...state, ...action.user };
    case types.FETCH_JWT_SUCCESS:
      return { ...state, ...{ gymTrackerJWT: action.jwt, email: action.email } };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default user;
