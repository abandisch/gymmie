import React from 'react';
import PropTypes from 'prop-types';
import './SetsTable.css';

const SetsTable = ({ name }) => (
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
      <tr><td colSpan="3">Exercise sets here</td></tr>
    </tbody>
  </table>
);

SetsTable.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SetsTable;
