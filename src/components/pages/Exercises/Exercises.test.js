import React from 'react';
import { shallow } from 'enzyme';
import { ExercisesPageComponent } from './index';

describe('<ExercisesPageComponent />', () => {
  it('renders without crashing', () => {
    const props = {
      match: {
        params: {
          programId: 'testprogid',
        },
      },
      isLoading: false,
      programName: 'test program',
      weekNumber: 1,
      dayNumber: 1,
    };
    shallow(<ExercisesPageComponent {...props} />);
  });
});

