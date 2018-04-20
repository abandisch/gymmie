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
    };
    shallow(<ExercisesPageComponent {...props} />);
  });
});

