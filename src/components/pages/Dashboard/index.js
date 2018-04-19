import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Board = ({ onSubmitOwnWorkout, onSubmitTrainerWorkout }) => (
  <section className="dashboard">

    <p>
      Select your preferred Workout.
    </p>

    <form onSubmit={onSubmitOwnWorkout}>
      <button className="btn btn-start">
        <i className="fa fa-play" /> My own Workout
      </button>
    </form>

    <form onSubmit={onSubmitTrainerWorkout}>
      <button className="btn btn-start">
        <i className="fa fa-play" /> Trainer defined Workout
      </button>
    </form>

  </section>
);

Board.propTypes = {
  onSubmitOwnWorkout: PropTypes.func.isRequired,
  onSubmitTrainerWorkout: PropTypes.func.isRequired,
};

class Dashboard extends React.Component {
  submitOwnWorkout = (event) => {
    event.preventDefault();
    this.redirectTo('/dashboard/my-workout');
  }

  submitTrainerWorkout = (event) => {
    event.preventDefault();
    this.redirectTo('/dashboard/training-programs');
  }

  redirectTo = (path) => {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    return (<Board
      onSubmitOwnWorkout={this.submitOwnWorkout}
      onSubmitTrainerWorkout={this.submitTrainerWorkout}
    />);
  }
}

Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Dashboard);
