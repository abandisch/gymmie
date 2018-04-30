import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN_API_URL, STR_TRCKR_API_URL } from '../config';
import * as actions from './index';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('# logout', () => {
    it('dispatches the logout action', () => {
      const store = mockStore({ });
      const expectedActions = [
        { type: types.LOGOUT },
      ];
      store.dispatch(actions.logout());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('# addSetToExercise', () => {
    it('creates ADD_EXERCISE_SET_SUCCESS when the api call is successful', () => {
      fetchMock
        .post(
          `${STR_TRCKR_API_URL}/exercises/sets`,
          {
            body: {
              programId: 'program.id', exerciseId: 'exerciseId', weight: 'test weight', reps: 1,
            },
            headers: { 'content-type': 'application/json' },
          },
        );

      const expectedActions = [
        {
          exerciseId: 'exerciseId',
          set: { reps: 1, weight: 'test weight' },
          type: types.ADD_EXERCISE_SET,
        },
        { type: types.ADD_EXERCISE_SET_REQUEST },
        { type: types.ADD_EXERCISE_SET_SUCCESS }];

      const store = mockStore({
        user: {
          email: 'alex@bandisch.com',
          gymTrackerJWT: 'eyJhbGciOiJIUzI1NiIsInR',
        },
        program: {
          id: '12345-test-program-id-12345',
          name: 'Test program name',
          startDate: '2018-04-30',
        },
      });

      return store.dispatch(actions.addSetToExercise('exerciseId', { weight: 'test weight', reps: 1 })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates ADD_EXERCISE_SET_FAILURE if adding the set fails', () => {
      fetchMock
        .post(
          `${STR_TRCKR_API_URL}/exercises/sets`,
          Promise.reject(new Error('An error')),
        );

      const expectedActions = [
        {
          exerciseId: 'exerciseId',
          set: { reps: 1, weight: 'test weight' },
          type: types.ADD_EXERCISE_SET,
        },
        { type: types.ADD_EXERCISE_SET_REQUEST },
        { message: 'Problem connecting to undefined.', type: types.ADD_EXERCISE_SET_FAILURE },
      ];

      const store = mockStore({
        user: {
          email: 'alex@bandisch.com',
          gymTrackerJWT: 'eyJhbGciOiJIUzI1NiIsInR',
        },
        program: {
          id: '12345-test-program-id-12345',
          name: 'Test program name',
          startDate: '2018-04-30',
        },
      });

      return store.dispatch(actions.addSetToExercise('exerciseId', { weight: 'test weight', reps: 1 })).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('# fetchJWT', () => {
    it('creates FETCH_JWT_SUCCESS when fetching JWT is done', () => {
      fetchMock
        .post(
          `${LOGIN_API_URL}`,
          {
            body: { email: 'test@test.com', password: null },
            headers: { 'content-type': 'application/json' },
          },
        );

      const TEST_EMAIL = 'test@test.com';

      const expectedActions = [
        { type: types.FETCH_JWT_REQUEST },
        { type: types.FETCH_JWT_SUCCESS, jwt: undefined, email: TEST_EMAIL },
      ];

      const store = mockStore({ });

      return store.dispatch(actions.fetchJWT(TEST_EMAIL)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates FETCH_JWT_FAILURE if fetching JWT fails', () => {
      fetchMock
        .post(
          `${LOGIN_API_URL}`,
          Promise.reject(new Error('An error')),
        );

      const TEST_EMAIL = 'test@test.com';

      const expectedActions = [
        { type: types.FETCH_JWT_REQUEST },
        { type: types.FETCH_JWT_FAILURE, message: 'Problem connecting to undefined.', emailAddress: TEST_EMAIL },
      ];

      const store = mockStore({ });

      return store.dispatch(actions.fetchJWT(TEST_EMAIL)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('# refreshJWT', () => {
    it('creates REFRESH_JWT_SUCCESS when refresh JWT is successful', () => {
      fetchMock
        .post(
          `${LOGIN_API_URL}/refresh`,
          {
            body: { jwt: 'new-jwt' },
            headers: { 'content-type': 'application/json' },
          },
        );

      const TEST_EMAIL = 'test@test.com';

      const expectedActions = [
        { type: types.REFRESH_JWT_REQUEST },
        { type: types.REFRESH_JWT_SUCCESS, jwt: undefined },
      ];

      const store = mockStore({
        user: {
          email: TEST_EMAIL,
          gymTrackerJWT: 'eyJhbGciOiJIUzI1NiIsInR',
        },
      });

      return store.dispatch(actions.refreshJWT()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates REFRESH_JWT_FAILURE if fetching JWT fails', () => {
      fetchMock
        .post(
          `${LOGIN_API_URL}/refresh`,
          Promise.reject(new Error('An error')),
        );

      const TEST_EMAIL = 'test@test.com';

      const expectedActions = [
        { type: types.REFRESH_JWT_REQUEST },
        { type: types.REFRESH_JWT_FAILURE, message: 'Problem connecting to undefined.', emailAddress: TEST_EMAIL },
      ];

      const store = mockStore({
        user: {
          email: TEST_EMAIL,
          gymTrackerJWT: 'eyJhbGciOiJIUzI1NiIsInR',
        },
      });

      return store.dispatch(actions.refreshJWT()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('# selectProgram', () => {
    it('creates SELECT_PROGRAM_SUCCESS when selecting a program succeeds', () => {
      const programId = '123456';
      const programName = 'test program name';
      const programStartDate = new Date().toISOString().split('T')[0];
      const expectedActions = [
        { type: types.SELECT_PROGRAM_REQUEST },
        {
          type: types.SELECT_PROGRAM_SUCCESS,
          strengthProgram: { id: programId, name: programName, startDate: programStartDate },
        },
      ];

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json() {
            return true;
          },
        }));

      const store = mockStore({ user: {}, loading: false, program: {} });

      return store.dispatch(actions.selectProgram(programId, programName)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SELECT_PROGRAM_FAILURE when selecting a program fails', () => {
      const programId = '123456';
      const programName = 'test program name';

      const expectedActions = [
        { type: types.SELECT_PROGRAM_REQUEST },
        {
          type: types.SELECT_PROGRAM_FAILURE,
          message: 'Problem connecting to undefined.',
        },
      ];

      global.fetch = jest.fn().mockImplementation(() => Promise.reject());

      const store = mockStore({ user: {}, loading: false, program: {} });

      return store.dispatch(actions.selectProgram(programId, programName)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('# actions', () => {
  describe('# openNavigation', () => {
    it('returns the correct object', () => {
      const result = actions.openNavigation();
      const expectedResult = {
        type: types.OPEN_NAVIGATION,
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('# closeNavigation', () => {
    it('returns the correct object', () => {
      const result = actions.closeNavigation();
      const expectedResult = {
        type: types.CLOSE_NAVIGATION,
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('# toggleNavigation', () => {
    it('returns the correct object', () => {
      const result = actions.toggleNavigation(true);
      const expectedResult = {
        type: types.TOGGLE_NAVIGATION,
        toggle: true,
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('# showModal', () => {
    it('returns the correct object', () => {
      const result = actions.showModal('title', 'message');
      const expectedResult = {
        type: types.SHOW_MODAL,
        modalProps: {
          title: 'title',
          message: 'message',
        },
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('# hideModal', () => {
    it('returns the correct object', () => {
      const result = actions.hideModal(true);
      const expectedResult = {
        type: types.HIDE_MODAL,
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('# addExerciseSet', () => {
    it('returns the correct object', () => {
      const result = actions.addExerciseSet('exerciseId', 'set');
      const expectedResult = {
        type: types.ADD_EXERCISE_SET,
        exerciseId: 'exerciseId',
        set: 'set',
      };
      expect(result).toEqual(expectedResult);
    });
  });
});

