import React from 'react';
import PropTypes from 'prop-types';
import './Notes.css';
import './Notes-media-queries.css';

const Notes = ({ ptNote }) => (
  <div className="pt-notes">
    <span>Exercise Notes: </span>
    <p>{ptNote || 'No notes for this exercise'}</p>
  </div>
);

Notes.propTypes = {
  ptNote: PropTypes.string.isRequired,
};

export default Notes;
