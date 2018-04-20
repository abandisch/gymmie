import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './index';

describe('<TextInput />', () => {
  it('renders without crashing', () => {
    const props = {
      placeholder: 'test',
      label: 'test',
    };
    shallow(<TextInput {...props} />);
  });
});
