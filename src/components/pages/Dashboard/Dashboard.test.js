import React from 'react';
import { shallow } from 'enzyme';
import { DashboardContainer, Board } from './index';

describe('<DashboardContainer />', () => {
  it('renders without crashing', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    shallow(<DashboardContainer {...props} />);
  });
});

describe('<Board />', () => {
  it('renders without crashing', () => {
    const props = {
      onSubmitOwnWorkout: jest.fn(),
      onSubmitTrainerWorkout: jest.fn(),
    };
    shallow(<Board {...props} />);
  });
});
