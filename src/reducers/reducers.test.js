import reducer from './index';
import * as actions from '../actions';
import * as types from '../actions/types';

const initialState = {
  exercises: {},
  form: {},
  loading: { login: false },
  modal: { modalProps: {}, showModal: false },
  navigation: { open: false },
  program: {},
  user: {},
};

describe('# root reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

describe('# navigation reducer', () => {
  it('should open the navigation', () => {
    const expectedState = Object.assign({}, initialState, { navigation: { open: true } });
    expect(reducer({}, actions.openNavigation())).toEqual(expectedState);
  });

  it('should close the navigation', () => {
    const expectedState = Object.assign({}, initialState, { navigation: { open: false } });
    expect(reducer({}, actions.closeNavigation())).toEqual(expectedState);
  });

  it('should toggle the navigation', () => {
    const expectedState = Object.assign({}, initialState, { navigation: { open: true } });
    expect(reducer({}, actions.toggleNavigation(true))).toEqual(expectedState);
  });

  it('should close the navigation when logging out', () => {
    const expectedState = Object.assign({}, initialState, { navigation: { open: false } });
    expect(reducer({}, { type: types.LOGOUT })).toEqual(expectedState);
  });
});

describe('# exercises reducer', () => {
  it('should add a set', () => {
    const expectedState = Object.assign({}, initialState, { exercises: { exerciseId: [{ reps: 2, setNumber: 1, weight: 'test weight' }] } });
    expect(reducer({}, actions.addExerciseSet('exerciseId', { weight: 'test weight', reps: 2 }))).toEqual(expectedState);
  });
});

describe('# modal reducer', () => {
  it('should show the modal with title and message', () => {
    const expectedState = Object.assign({}, initialState, { modal: { modalProps: { title: 'title', message: 'message' }, showModal: true } });
    expect(reducer({}, actions.showModal('title', 'message'))).toEqual(expectedState);
  });
  it('should hide the modal', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { modal: { modalProps: { }, showModal: false } },
    );
    expect(reducer({}, actions.hideModal())).toEqual(expectedState);
  });
});

describe('# loading reducer', () => {
  describe('# login', () => {
    it('should be loading when requesting', () => {
      const expectedState = Object.assign({}, initialState, { loading: { login: true } });
      expect(reducer({}, { type: types.FETCH_JWT_REQUEST })).toEqual(expectedState);
    });
    it('should not be loading when request is complete', () => {
      const expectedState = Object.assign({}, initialState, { loading: { login: false } });
      expect(reducer({}, { type: types.FETCH_JWT_SUCCESS })).toEqual(expectedState);
    });
  });
  describe('# program', () => {
    it('should be loading when requesting', () => {
      const expectedState = Object.assign(
        {}, initialState,
        { loading: { selectProgram: true, login: false } },
      );
      expect(reducer({}, { type: types.SELECT_PROGRAM_REQUEST })).toEqual(expectedState);
    });
    it('should not be loading when requesting is complete', () => {
      const expectedState = Object.assign(
        {}, initialState,
        { loading: { selectProgram: false, login: false } },
      );
      expect(reducer({}, { type: types.SELECT_PROGRAM_SUCCESS })).toEqual(expectedState);
    });
    it('should not be loading when requesting fails', () => {
      const expectedState = Object.assign(
        {}, initialState,
        { loading: { selectProgram: false, login: false } },
      );
      expect(reducer({}, { type: types.SELECT_PROGRAM_FAILURE })).toEqual(expectedState);
    });
  });

  describe('# addExercise', () => {
    it('should be loading when requesting', () => {
      const expectedState = Object.assign(
        {}, initialState,
        { loading: { login: false, addExercise: true } },
      );
      expect(reducer({}, { type: types.ADD_EXERCISE_SET_REQUEST })).toEqual(expectedState);
    });
    it('should not be loading when requesting is complete', () => {
      const expectedState = Object.assign(
        {}, initialState,
        { loading: { login: false, addExercise: false } },
      );
      expect(reducer({}, { type: types.ADD_EXERCISE_SET_SUCCESS })).toEqual(expectedState);
    });
    it('should not be loading when requesting fails', () => {
      const expectedState = Object.assign(
        {}, initialState,
        { loading: { login: false, addExercise: false } },
      );
      expect(reducer({}, { type: types.ADD_EXERCISE_SET_FAILURE })).toEqual(expectedState);
    });
  });
});
