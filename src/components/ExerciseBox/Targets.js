import React from 'react';
import PropTypes from 'prop-types';
import './Targets.css';
import './Targets-media-queries.css';

const Targets = ({ targetSets, targetReps }) => (
  <div className="targets">
    <h4 className="heading">TARGET SETS &amp; REPS:</h4>
    <p className="target-numbers">Sets: {targetSets}  Reps: {targetReps}</p>
  </div>
);

Targets.propTypes = {
  targetSets: PropTypes.number.isRequired,
  targetReps: PropTypes.number.isRequired,
};

export default Targets;
