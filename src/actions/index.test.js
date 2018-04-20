import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN_API_URL } from '../config';
import * as actions from './index';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('fetchJWT', () => {
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

  describe('selectProgram', () => {
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

