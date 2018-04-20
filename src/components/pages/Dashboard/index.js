import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RequiresLogin from '../../RequiresLogin';
import './Dashboard.css';

const styles = {
  button: {
    marginBottom: '20px',
  },
};

export const Board = ({ onSubmitOwnWorkout, onSubmitTrainerWorkout }) => (
  <section className="dashboard">
    <h2 className="section-title">Gymmie Dashboard</h2>
    <p>
      Select your preferred Workout.
    </p>

    <form onSubmit={onSubmitOwnWorkout}>
      <RaisedButton
        label="My own Workout"
        labelPosition="before"
        icon={<RightArrow color={fullWhite} />}
        primary
        fullWidth
        type="submit"
        style={styles.button}
      />
    </form>

    <form onSubmit={onSubmitTrainerWorkout}>
      <RaisedButton
        label="Trainer defined Workoutt"
        labelPosition="before"
        icon={<RightArrow color={fullWhite} />}
        primary
        fullWidth
        type="submit"
        style={styles.button}
      />
    </form>

  </section>
);

Board.propTypes = {
  onSubmitOwnWorkout: PropTypes.func.isRequired,
  onSubmitTrainerWorkout: PropTypes.func.isRequired,
};

export class DashboardContainer extends React.Component {
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

DashboardContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default RequiresLogin()(withRouter(DashboardContainer));
