import React from 'react';
import { shallow } from 'enzyme';
import Targets from './Targets';

describe('<Targets />', () => {
  it('renders without crashing', () => {
    const props = {
      targetSets: 1,
      targetReps: 2,
    };
    shallow(<Targets {...props} />);
  });
});
