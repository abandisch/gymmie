import * as types from '../actions/types';

const initialState = { login: false };

const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_JWT_REQUEST:
      return { ...state, login: true };
    case types.FETCH_JWT_SUCCESS:
    case types.FETCH_JWT_FAILURE:
      return { ...state, login: false };
    case types.SELECT_PROGRAM_REQUEST:
      return { ...state, selectProgram: true };
    case types.SELECT_PROGRAM_FAILURE:
    case types.SELECT_PROGRAM_SUCCESS:
      return { ...state, selectProgram: false };
    case types.ADD_EXERCISE_SET_REQUEST:
      return { ...state, addExercise: true };
    case types.ADD_EXERCISE_SET_SUCCESS:
    case types.ADD_EXERCISE_SET_FAILURE:
      return { ...state, addExercise: false };
    default:
      return state;
  }
};

export default loading;
