import React from 'react';
import { shallow } from 'enzyme';
import Heading from './index';

describe('<Heading />', () => {
  it('renders without crashing', () => {
    shallow(<Heading />);
  });
});
