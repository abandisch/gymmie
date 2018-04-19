import * as types from '../actions/types';

const exerciseSets = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXERCISE_SET:
      return [
        ...state,
        {
          setNumber: (state.length ? state.length : 0) + 1, // int: counter for set number
          weight: action.set.weight, // string: weight lifted, e.g. 'body weight' or number 10
          reps: Number.parseInt(action.set.reps, 10), // int: reps
        },
      ];
    default:
      return state;
  }
};

const exercises = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_EXERCISE_SET:
      return Object.assign({}, state, {
        [action.exerciseId]: exerciseSets(state[action.exerciseId], action),
      });
    default:
      return state;
  }
};


// Example exercise state (exercise objects, with the exercise Id as the key):
/*
const exampleState = {
  'ex-01': [
    {
      setNumber: 1,
      reps: 10,
      weight: 12,
    },
    {
      setNumber: 2,
      reps: 10,
      weight: 12,
    },
  ],
  'ex-02': [
    {
      setNumber: 1,
      reps: 10,
      weight: 12,
    },
    {
      setNumber: 2,
      reps: 10,
      weight: 12,
    },
  ],
};
*/


export default exercises;
