import React from 'react';
import { shallow } from 'enzyme';
import { iconButtonElement, rightIconMenu, CreateListItem, CreateList } from './index';

describe('<ProgramList />', () => {
/*   it('renders without crashing', () => {
    shallow(<OwnWorkout />);
  }); */

  describe('<iconButtonElement />', () => {
    it('renders without crashing', () => {
      shallow(<iconButtonElement />);
    });
  });

  describe('<rightIconMenu />', () => {
    it('renders without crashing', () => {
      const props = {
        onClickMenuSummary: jest.fn(),
        onClickMenuProgram: jest.fn(),
      };
      shallow(<rightIconMenu {...props} />);
    });
  });

  describe('<CreateListItem />', () => {
    it('renders without crashing', () => {
      const props = {
        item: {
          id: 'item-id',
          name: 'item name',
          summary: 'item summary',
        },
        onSelectProgram: jest.fn(),
        onClickMenuSummary: jest.fn(),
        onClickMenuProgram: jest.fn(),
      };
      shallow(<CreateListItem {...props} />);
    });
  });

  describe('<CreateList />', () => {
    it('renders without crashing', () => {
      const props = {
        allPrograms: [
          {
            id: 'program-id',
            name: 'program name',
            summary: 'item summary',
          },
        ],
        onSelectProgram: jest.fn(),
        onClickSummaryMenuItem: jest.fn(),
        onClickSelectProgramMenuItem: jest.fn(),
      };
      shallow(<CreateList {...props} />);
    });
  });
});
