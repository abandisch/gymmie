import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import { ScaleLoader } from 'react-spinners';
import * as utils from '../../utils';

import ExerciseBox from '../ExerciseBox';

export const ListOfExercises = ({ data }) => {
  if (data.loading) {
    return (
      <div className="loading-container">
        <p className="loading">Loading Exercises ...</p>
        <ScaleLoader color="#00bcd4" height={20} width={3} margin="2px" radius={10} />
      </div>);
  }
  const { exercises } = data.findByDay;
  return <ExercisesListView exercises={exercises} />;
};

export const SingleExerciseView = (ex) => {
  const props = {
    exerciseId: ex.id,
    name: ex.type,
    targets: {
      sets: ex.sets,
      reps: ex.reps,
    },
    ptNote: ex.comments,
  };
  return <ExerciseBox key={ex.id} {...props} />;
};

export const ExercisesListView = ({ exercises }) => exercises.map(SingleExerciseView);

ExercisesListView.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
    sets: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  })).isRequired,
};

ListOfExercises.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

const GET_EXERCISES =
  gql`query findByDay ($programId: String!, $dayNumber: Int!) {
    findByDay (id: $programId, dayNumber: $dayNumber) {
      id
      dayType
      dayNumber
      exercises {
        id
        reps
        sets
        type
        comments
      }
    }
  }`;

export default compose(
  withRouter,
  graphql(
    GET_EXERCISES,
    {
      options: (props) => {
        // when selecting a program the start date will be today
        // @TODO: Add function to move forward on exercise day
        const programStartDate = new Date().toISOString().split('T')[0];
        return ({
          variables: {
            programId: props.match.params.programId,
            dayNumber: utils.currentDayNumber(programStartDate),
          },
        });
      },
    },
  ),
  withApollo,
)(ListOfExercises);
