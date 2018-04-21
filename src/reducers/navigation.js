import * as types from '../actions/types';

const program = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_NAVIGATION:
      return true;
    case types.CLOSE_NAVIGATION:
      return false;
    default:
      return state;
  }
};

export default program;
