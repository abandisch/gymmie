import React from 'react';
import { shallow } from 'enzyme';
import { SetForm, InputForm, mapDispatchToProps } from './SetsForm';

describe('<SetForm />', () => {
  it('shows the form when toggle button is pressed', () => {
    const props = {
      handleSubmit: () => jest.fn(),
      exerciseId: 'test-exercise-id',
      resetForm: () => jest.fn(),
      addExerciseSet: () => jest.fn(),
      onFormSubmitted: () => jest.fn(),
    };
    const wrapper = shallow(<SetForm {...props} />);
    wrapper.simulate('pressToggleForm');
    expect(wrapper.props().showForm).toEqual(true);
  });

  it('hides the form', () => {
    const props = {
      handleSubmit: () => jest.fn(),
      exerciseId: 'test-exercise-id',
      resetForm: () => jest.fn(),
      addExerciseSet: () => jest.fn(),
      onFormSubmitted: () => jest.fn(),
    };
    const wrapper = shallow(<SetForm {...props} />);
    wrapper.instance().hideForm();
    expect(wrapper.props().showForm).toEqual(false);
  });
});

describe('<InputForm />', () => {
  it('renders without crashing - show button only', () => {
    const props = {
      showForm: false,
      onPressToggleForm: jest.fn(),
      onFormSubmitted: jest.fn(),
    };
    shallow(<InputForm {...props} />);
  });

  it('renders without crashing - show form', () => {
    const props = {
      showForm: true,
      onPressToggleForm: jest.fn(),
      onFormSubmitted: jest.fn(),
    };
    shallow(<InputForm {...props} />);
  });
});

describe('# mapDispatchToProps', () => {
  it('maps the correct object', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);
    expect(result).toHaveProperty('resetForm');
    expect(result).toHaveProperty('addExerciseSet');
  });

  it('dispatches resetForm', () => {
    const mockDispatch = jest.fn();
    mapDispatchToProps(mockDispatch).resetForm();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('dispatches addExerciseSet', () => {
    const mockDispatch = jest.fn();
    const ownProps = {
      exerciseId: 'test-exercise-id',
    };
    mapDispatchToProps(mockDispatch, ownProps).addExerciseSet();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
