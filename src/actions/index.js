import * as api from '../api';
import * as types from './types';
import { clearState } from '../localStorage';

export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
  clearState(); // clear localstorage state
};

export const openNavigation = () => ({
  type: types.OPEN_NAVIGATION,
});

export const closeNavigation = () => ({
  type: types.CLOSE_NAVIGATION,
});

export const toggleNavigation = toggle => ({
  type: types.TOGGLE_NAVIGATION,
  toggle,
});

export const showModal = (title, message) => ({
  type: types.SHOW_MODAL,
  modalProps: {
    title,
    message,
  },
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});

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

export const refreshJWT = () => (dispatch, getState) => {
  dispatch({
    type: types.REFRESH_JWT_REQUEST,
  });
  const currentJWT = getState().user.gymTrackerJWT;
  return api.refreshJWT(currentJWT)
    .then(
      (response) => {
        dispatch({
          type: types.REFRESH_JWT_SUCCESS,
          jwt: response.jwt,
        });
      },
      (error) => {
        dispatch({
          type: types.REFRESH_JWT_FAILURE,
          emailAddress: getState().user.email,
          message: error.message || 'Something went wrong refreshing JWT.',
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
