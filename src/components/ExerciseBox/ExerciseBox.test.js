import React from 'react';
import { shallow } from 'enzyme';
import ExerciseBox from './index';

describe('<ExerciseBox />', () => {
  it('renders without crashing', () => {
    const props = {
      exerciseId: 'exercise-id',
      name: 'exercise name',
      targets: {
        sets: 1,
        reps: 2,
      },
    };
    shallow(<ExerciseBox {...props} />);
  });
});
