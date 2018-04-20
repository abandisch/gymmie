import React from 'react';
import { shallow } from 'enzyme';
import { ProgramsPageComponent } from './index';

describe('<ProgramsPageComponent />', () => {
  it('renders without crashing', () => {
    shallow(<ProgramsPageComponent />);
  });
});
