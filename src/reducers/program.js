import * as types from '../actions/types';

const program = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_PROGRAM_SUCCESS:
      return { ...state, ...action.strengthProgram };
    case types.SELECT_PROGRAM_REQUEST:
    case types.SELECT_PROGRAM_FAILURE:
    default:
      return state;
  }
};

export default program;
