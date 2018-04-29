import React from 'react';
import PropTypes from 'prop-types';
import LastSession from './LastSession';
import Targets from './Targets';
import Notes from './Notes';
import SetsForm from './SetsForm';
import ExerciseSetsTable from './SetsTable';
import './ExerciseBox.css';
import './ExerciseBox-media-queries.css';

const ExerciseBox = ({
  exerciseId, name, lastSession, targets, ptNote,
}) => (
  <div className="exercise-box">
    <h3>{name.toUpperCase()}</h3>
    <LastSession lastSession={lastSession} />
    <ExerciseSetsTable exerciseId={exerciseId} name={name} />
    <SetsForm exerciseId={exerciseId} />
    <Targets targetSets={targets.sets} targetReps={targets.reps} />
    <Notes ptNote={ptNote} />
  </div>
);

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
