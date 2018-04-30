import React from 'react';
import { shallow } from 'enzyme';
import { ModalComponent, mapStateToProps, mapDispatchToProps, PopupDialogModal } from './DialogModal';

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

describe('<PopupDialogModal />', () => {
  it('calls hideDialogModal when clicked', () => {
    const mockCallback = jest.fn();
    const props = {
      hideDialogModal: mockCallback,
      modalProps: {
        title: 'test title',
        message: 'test message',
      },
      showModal: false,
    };
    const wrapper = shallow(<PopupDialogModal {...props} />);
    wrapper.simulate('clickClose');
    expect(mockCallback).toHaveBeenCalled();
  });
});

describe('# mapStateToProps', () => {
  it('returns the correct object', () => {
    const initialState = {
      modal: {
        showModal: false,
        modalProps: { title: 'test title', message: 'test message' },
      },
    };
    const expectedObject = {
      showModal: false,
      modalProps: { title: 'test title', message: 'test message' },
    };

    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedObject);
  });
});

describe('# mapDispatchToProps', () => {
  it('returns the correct object', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);
    expect(result).toHaveProperty('hideDialogModal');
  });

  it('dispatches hideModal', () => {
    const mockDispatch = jest.fn();
    mapDispatchToProps(mockDispatch).hideDialogModal();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
