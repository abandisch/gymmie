import React from 'react';
import PropTypes from 'prop-types';
// import ExerciseSetForm from './SetForm';
// import ExerciseSetTable from './SetTable';
import './ExerciseBox.css';

export const LastSessionBox = ({ lastSession }) => (
  lastSession ?
    (
      <div className="last-session">
        <p>Last Session: {lastSession.week} - {lastSession.day}</p>
        <p> Weight: {lastSession.weight} - Max Reps: {lastSession.reps}</p>
      </div>
    ) :
      <div className="last-session">
        <p>No previous session details</p>
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

const ExerciseBox = ({
  exerciseId, name, lastSession, targets, ptNote,
}) => (
  <div className="exercise-box">
    <h3>{name.toUpperCase()}</h3>
    <LastSessionBox lastSession={lastSession} />
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
        <tr><td colSpan="3">Exercises here</td></tr>
      </tbody>
    </table>
    <div className="targets">
      <h4 className="heading">TARGET SETS &amp; REPS:</h4>
      <p className="target-numbers">Sets: {targets.sets}  Reps: {targets.reps}</p>
    </div>
    <div className="pt-notes">
      <span>Exercise Notes: </span>
      <p>{ptNote || 'No notes for this exercise'}</p>
    </div>
  </div>
);
//  ${exerciseSetsHTML}
/*
  <View style={styles.container}>
    <Text style={styles.name}>{name.toUpperCase()}</Text>
    <LastSessionBox lastSession={lastSession} />
    <ExerciseSetTable exerciseId={exerciseId} />
    <ExerciseSetForm exerciseId={exerciseId} />
    <View style={styles.targetsContainer}>
      <Text style={styles.targetsHeading}>TARGET SETS & REPS:</Text>
      <Text style={styles.targets}>Sets: {targets.sets}  Reps: {targets.reps}</Text>
    </View>
    <View style={styles.ptNoteContainer}>
      <Text style={styles.ptNoteHeading}>Exercise Notes: </Text>
      <Text style={styles.ptNoteText}>{ptNote || 'No notes for this exercise'}</Text>
    </View>
  </View>
*/

ExerciseBox.propTypes = {
  exerciseId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastSession: PropTypes.shape({
    week: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  }),
  targets: PropTypes.shape({
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
  }).isRequired,
  ptNote: PropTypes.string,
};

ExerciseBox.defaultProps = {
  lastSession: null,
  ptNote: '',
};

export default ExerciseBox;
