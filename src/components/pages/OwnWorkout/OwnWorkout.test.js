import React from 'react';
import { shallow } from 'enzyme';
import OwnWorkout from './index';

describe('<OwnWorkout />', () => {
  it('renders without crashing', () => {
    shallow(<OwnWorkout />);
  });
});
