import * as api from '../api';
import * as types from './types';

export const addExerciseSet = (exerciseId, set) => ({
  type: types.ADD_EXERCISE_SET,
  exerciseId,
  set,
});

export const addSetToExercise = (exerciseId, set) => (dispatch, getState) => {
  dispatch(addExerciseSet(exerciseId, set));
  dispatch({
    type: types.ADD_EXERCISE_SET_REQUEST,
  });
  return api.addExerciseToSet(getState().user, getState().program, exerciseId, set)
    .then(
      () => {
        dispatch({
          type: types.ADD_EXERCISE_SET_SUCCESS,
        });
      },
      (error) => {
        dispatch({
          type: types.ADD_EXERCISE_SET_FAILURE,
          message: error.message || 'Something went wrong.',
        });
      },
    );
};

export const fetchJWT = emailAddress => (dispatch) => {
  dispatch({
    type: types.FETCH_JWT_REQUEST,
  });
  return api.fetchJWT({ email: emailAddress, password: 'null' })
    .then(
      (response) => {
        dispatch({
          type: types.FETCH_JWT_SUCCESS,
          jwt: response.jwt,
          email: emailAddress,
        });
      },
      (error) => {
        dispatch({
          type: types.FETCH_JWT_FAILURE,
          emailAddress,
          message: error.message || 'Something went wrong.',
        });
      },
    );
};

export const selectProgram = (programId, programName) => (dispatch, getState) => {
  dispatch({
    type: types.SELECT_PROGRAM_REQUEST,
  });
  /*
   * @TODO: For version 2.0
   *  - popup a calendar when the user selects a program and ask for the programStartDate,
   *    then send that to the server instead of today's date.
   * */
  const programStartDate = new Date().toISOString().split('T')[0];
  return api.selectProgram(getState().user, programId, programName, programStartDate)
    .then(
      () => {
        dispatch({
          type: types.SELECT_PROGRAM_SUCCESS,
          strengthProgram: { id: programId, name: programName, startDate: programStartDate },
        });
      },
      (error) => {
        dispatch({
          type: types.SELECT_PROGRAM_FAILURE,
          message: error.message || 'Something went wrong setting the program.',
        });
      },
    );
};
