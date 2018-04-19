import { fetchJWT, selectProgram } from './index';

describe('# fetchJWT ', () => {
  it('should successfully get the authToken from the api', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
          return ({
            authToken: 'testauthtoken',
          });
        },
      }));

    const user = {
      email: 'test@test.com',
    };
    const expectedResult = {
      authToken: 'testauthtoken',
    };
    expect.assertions(1);
    fetchJWT(user).then(result => expect(result).toEqual(expectedResult));
  });

  it('should return an error is failing to call the api', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Test error')));

    const user = {
      email: 'test@test.com',
    };
    expect.assertions(1);
    try {
      await fetchJWT(user);
    } catch (e) {
      expect(e.message).toEqual('Problem connecting to GymBuddy.');
    }
  });
});

describe('# selectProgram ', () => {
  it('should send a PUT request to the server', async () => {
    const user = {
      gymTrackerJWT: 'jwt-test-token',
    };
    const programId = 'test-prog-id';
    const programName = 'test-name';
    const dateStarted = '2018-04-06';

    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve());

    try {
      selectProgram(user, programId, programName, dateStarted);
      // .then(res => console.log('res:', res));
      // console.log('result:', result);
    } catch (e) {
      // console.log('error:', e);
    }
  });

  it('should return an error is failing to call the api', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Test error')));

    const user = {
      gymTrackerJWT: 'jwt-test-token',
    };
    const programId = 'test-prog-id';
    const name = 'test-name';
    const dateStarted = '2018-04-06';
    expect.assertions(1);
    try {
      await selectProgram(user, programId, name, dateStarted);
    } catch (e) {
      expect(e.message).toEqual('Problem connecting to GymBuddy.');
    }
  });
});
