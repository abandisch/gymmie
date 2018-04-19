import React from 'react';
import PropTypes from 'prop-types';
import LastSession from './LastSession';
import Targets from './Targets';
import Notes from './Notes';
// import ExerciseSetForm from './SetForm';
import SetsTable from './SetsTable';
import './ExerciseBox.css';

const ExerciseBox = ({
  exerciseId, name, lastSession, targets, ptNote,
}) => (
  <div className="exercise-box">
    <h3>{name.toUpperCase()}</h3>
    <LastSession lastSession={lastSession} />
    <SetsTable name={name} />
    <Targets targetSets={targets.sets} targetReps={targets.reps} />
    <Notes ptNote={ptNote} />
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
