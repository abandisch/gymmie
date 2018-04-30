import React from 'react';
import { shallow } from 'enzyme';
import { SetsTable, setsTableRow, buildTableRows } from './SetsTable';

describe('<SetsTable />', () => {
  it('renders without crashing', () => {
    const props = {
      name: 'test name',
      sets: [],
    };
    shallow(<SetsTable {...props} />);
  });
});

describe('# setsTableRow', () => {
  it('renders without crashing', () => {
    const set = {
      setNumber: 1,
      weight: 'test weight',
      reps: 1,
    };
    const expectedResult = (
      <tr key={set.setNumber}><td>{set.setNumber}</td><td>{set.weight}</td><td>{set.reps}</td></tr>
    );
    const result = setsTableRow(set);
    expect(result).toEqual(expectedResult);
  });
});

describe('# buildTableRow', () => {
  it('builds the sets row for the table', () => {
    const sets = [
      {
        setNumber: 1,
        weight: 'test weight 1',
        reps: 2,
      },
      {
        setNumber: 2,
        weight: 'test weight 2',
        reps: 3,
      }];
    const expectedResult = [
      (
        <tr key={sets[0].setNumber}>
          <td>{sets[0].setNumber}</td><td>{sets[0].weight}</td><td>{sets[0].reps}</td>
        </tr>
      ),
      (
        <tr key={sets[1].setNumber}>
          <td>{sets[1].setNumber}</td><td>{sets[1].weight}</td><td>{sets[1].reps}</td>
        </tr>
      ),
    ];
    const result = buildTableRows(sets);
    expect(result).toEqual(expectedResult);
  });
});
