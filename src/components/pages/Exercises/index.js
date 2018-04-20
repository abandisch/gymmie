import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RequiresLogin from '../../RequiresLogin';
import ExercisesList from '../../ExercisesList';

export const ExercisesPageComponent = ({ match: { params } }) => {
  const { programId } = params;
  return (
    <section className="exercises">
      <h2>Exercises</h2>
      <ExercisesList programId={programId} />
    </section>
  );
};

ExercisesPageComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      programId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
// @TODO: connect it to the state here and have a 'exercises loading'
export default RequiresLogin()(withRouter(ExercisesPageComponent));
