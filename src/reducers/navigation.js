import * as types from '../actions/types';

const navigation = (state = { open: false }, action) => {
  switch (action.type) {
    case types.OPEN_NAVIGATION:
      return { ...state, open: true };
    case types.CLOSE_NAVIGATION:
      return { ...state, open: false };
    case types.TOGGLE_NAVIGATION:
      return { ...state, open: action.toggle };
    case types.LOGOUT:
      return { ...state, open: false };
    default:
      return state;
  }
};

export default navigation;
