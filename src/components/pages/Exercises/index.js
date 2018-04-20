import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import RequiresLogin from '../../RequiresLogin';
import ExercisesList from '../../ExercisesList';
import * as utils from '../../../utils';
import './Exercises.css';

export const ExercisesPageComponent = ({
  match: { params }, isLoading, programName, weekNumber, dayNumber,
}) => {
  const { programId } = params;
  return (
    <section className="exercises">
      {
        isLoading &&
        <div className="loading-container">
          <p className="loading">Getting program details ...</p>
          <ScaleLoader color="#00bcd4" height={20} width={3} margin="2px" radius={10} />
        </div>
      }
      {
        !isLoading &&
        <div>
          <h2 className="section-title">{programName}</h2>
          <h3 className="week-and-day-number">Week {weekNumber} - Day {dayNumber}</h3>
          <ExercisesList programId={programId} />
        </div>
      }
    </section>
  );
};

ExercisesPageComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  programName: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      programId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  weekNumber: PropTypes.number.isRequired,
  dayNumber: PropTypes.number.isRequired,
};

ExercisesPageComponent.defaultProps = {
  programName: '',
};

// @TODO: connect it to the state here and have a 'exercises loading'
export const mapStateToProps = state => ({
  isLoading: state.loading.selectProgram,
  programName: state.program.name,
  weekNumber: utils.currentWeekNumber(state.program.startDate),
  dayNumber: utils.currentDayNumber(state.program.startDate),
});

export default RequiresLogin()(compose(
  connect(mapStateToProps),
  withRouter,
)(ExercisesPageComponent));
