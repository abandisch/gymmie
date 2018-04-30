import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';

describe('<Notes />', () => {
  it('renders without crashing', () => {
    shallow(<Notes ptNote="test note" />);
  });
});
