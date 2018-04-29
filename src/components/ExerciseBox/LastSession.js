import React from 'react';
import PropTypes from 'prop-types';
import './LastSession.css';
import './LastSession-media-queries.css';

const LastSessionBox = ({ lastSession }) => (
  lastSession ?
    (
      <div className="last-session">
        <p>Last Session: {lastSession.week} - {lastSession.day}</p>
        <p> Weight: {lastSession.weight} - Max Reps: {lastSession.reps}</p>
      </div>
    ) :
      <div className="last-session">
        <p className="no-prev">No previous session details</p>
      </div>
);

LastSessionBox.propTypes = {
  lastSession: PropTypes.shape({
    week: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  }),
};

LastSessionBox.defaultProps = {
  lastSession: null,
};

export default LastSessionBox;
