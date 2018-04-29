import { LOGIN_API_URL, APP_NAME, STR_TRCKR_API_URL } from '../config';

export const refreshJWT = (currentJWT) => {
  const init = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${currentJWT}`,
    },
  };
  return fetch(`${LOGIN_API_URL}/refresh`, init)
    .then(
      response => response.json(),
      error => Promise.reject(new Error(error.message || `Problem connecting to ${APP_NAME}`)),
    )
    .then(({ authToken }) => ({ jwt: authToken }))
    .catch(() => Promise.reject(new Error(`Problem connecting to ${APP_NAME}.`)));
};

export const fetchJWT = (user) => {
  const init = {
    method: 'POST',
    body: JSON.stringify({ email: user.email, password: user.password }),
    headers: { 'content-type': 'application/json' },
  };
  return fetch(`${LOGIN_API_URL}`, init)
    .then(
      response => response.json(),
      error => Promise.reject(new Error(error.message || `Problem connecting to ${APP_NAME}`)),
    )
    .then(({ authToken }) => ({ jwt: authToken }))
    .catch(() => Promise.reject(new Error(`Problem connecting to ${APP_NAME}.`)));
};

export const selectProgram = (user, programId, name, dateStarted) => {
  const init = {
    method: 'PUT',
    body: JSON.stringify({ programId, programName: name, dateStarted }),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${user.gymTrackerJWT}`,
    },
  };
  return fetch(`${STR_TRCKR_API_URL}/programs/${programId}`, init)
    .then(
      response =>
        (response.ok ?
          Promise.resolve() :
          Promise.reject(new Error(new Error(`Problem connecting to ${APP_NAME}..`)))),
      error =>
        Promise.reject(new Error(error.message || `Problem connecting to ${APP_NAME}`)),
    )
    .catch(() => Promise.reject(new Error(`Problem connecting to ${APP_NAME}.`)));
};

export const addExerciseToSet = (user, program, exerciseId, set) => {
  const init = {
    method: 'POST',
    body: JSON.stringify({
      programId: program.id, exerciseId, weight: set.weight, reps: set.reps,
    }),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${user.gymTrackerJWT}`,
    },
  };
  return fetch(`${STR_TRCKR_API_URL}/exercises/sets`, init)
    .then(
      response =>
        (response.ok ?
          Promise.resolve() :
          Promise.reject(new Error(new Error(`Problem connecting to ${APP_NAME}..`)))),
      error =>
        Promise.reject(new Error(error.message || `Problem connecting to ${APP_NAME}`)),
    )
    .catch(() => Promise.reject(new Error(`Problem connecting to ${APP_NAME}.`)));
};
