import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ExercisesList from '../../ExercisesList';

const ExercisesPage = ({ match: { params } }) => {
  const { programId } = params;
  return (
    <section className="exercises">
      <h2>Exercises</h2>
      <ExercisesList programId={programId} />
    </section>
  );
};

ExercisesPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      programId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
// @TODO: connect it to the state here and have a 'exercises loading'
export default withRouter(ExercisesPage);
