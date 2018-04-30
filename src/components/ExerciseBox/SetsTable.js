import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SetsTable.css';
import './SetsTable-media-queries.css';

export const setsTableRow = set => (
  <tr key={set.setNumber}>
    <td>{set.setNumber}</td>
    <td>{set.weight}</td>
    <td>{set.reps}</td>
  </tr>
);

export const buildTableRows = sets => sets.map(set => setsTableRow(set));

export const SetsTable = ({ name, sets }) => (
  <table className="set-table">
    <caption className="sr-only">Exercise Sets Table for {name}</caption>
    <thead>
      <tr>
        <th width="20%" scope="col">Set #</th>
        <th width="40%" scope="col">Weight</th>
        <th width="40%" scope="col">Reps</th>
      </tr>
    </thead>
    <tbody>
      {sets.length === 0 && <tr><td colSpan="3">Click on &lsquo;Add Set&rsquo; to record a set</td></tr>}
      {sets.length > 0 && buildTableRows(sets)}
    </tbody>
  </table>
);

SetsTable.propTypes = {
  name: PropTypes.string.isRequired,
  sets: PropTypes.arrayOf(PropTypes.shape({
    setNumber: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  })).isRequired,
};

export const mapStateToProps = (state, ownProps) => ({
  sets: state.exercises[ownProps.exerciseId] || [],
});

export default connect(mapStateToProps)(SetsTable);
