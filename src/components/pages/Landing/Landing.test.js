import React from 'react';
import { shallow } from 'enzyme';
import { LandingComponent, mapStateToProps } from './index';

describe('<LandingComponent />', () => {
  it('renders without crashing - logged in', () => {
    const props = {
      isLoggedIn: true,
    };
    shallow(<LandingComponent {...props} />);
  });
  it('renders without crashing - not logged in', () => {
    const props = {
      isLoggedIn: false,
    };
    shallow(<LandingComponent {...props} />);
  });
});

describe('# mapStateToProps', () => {
  it('isLoggedIn state should be true when user.gymTrackerJWT is defined', () => {
    const initialState = {
      user: {
        gymTrackerJWT: 'test-jwt',
      },
    };
    const expectedState = {
      isLoggedIn: true,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
  it('isLoggedIn state should be false when user.gymTrackerJWT is not defined', () => {
    const initialState = {
      user: { },
    };
    const expectedState = {
      isLoggedIn: false,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
});
