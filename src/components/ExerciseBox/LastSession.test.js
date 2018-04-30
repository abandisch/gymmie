import React from 'react';
import { shallow } from 'enzyme';
import LastSession from './LastSession';

describe('<LastSession />', () => {
  it('renders without crashing', () => {
    shallow(<LastSession />);
  });
});
