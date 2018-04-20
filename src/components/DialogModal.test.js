import React from 'react';
import { shallow } from 'enzyme';
import { ModalComponent } from './DialogModal';

describe('<ModalComponent />', () => {
  it('renders without crashing - not open', () => {
    const props = {
      title: 'test',
      message: 'test',
      actions: [<button>test</button>],
      open: false,
      onClickClose: jest.fn(),
    };
    shallow(<ModalComponent {...props} />);
  });
  it('renders without crashing - open', () => {
    const props = {
      title: 'test',
      message: 'test',
      actions: [<button>test</button>],
      open: true,
      onClickClose: jest.fn(),
    };
    shallow(<ModalComponent {...props} />);
  });
});
