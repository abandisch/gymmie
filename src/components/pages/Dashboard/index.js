import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RequiresLogin from '../../RequiresLogin';
import { showModal } from '../../../actions';
import './Dashboard.css';

const styles = {
  button: {
    marginBottom: '20px',
  },
};

export const Board = ({
  onSubmitOwnWorkout, onSubmitTrainerWorkout, currentProgramId, onSubmitCurrentTrainerWorkout,
}) => (
  <section className="dashboard">
    <h2 className="section-title">Gymmie Dashboard</h2>
    <p>
      Select your preferred workout.
    </p>

    <form onSubmit={onSubmitOwnWorkout}>
      <RaisedButton
        label="Do my own Workout"
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
        label="Select a new Trainer Workout"
        labelPosition="before"
        icon={<RightArrow color={fullWhite} />}
        primary
        fullWidth
        type="submit"
        style={styles.button}
      />
    </form>

    <p>... Or continue your selected Trainer Workout program:</p>

    {
      currentProgramId === '' &&
      <p className="not-started">
        You haven&lsquo;t selected a Trainer Workout Program yet.
        Click the above button to select one.
      </p>
    }

    {
      currentProgramId !== '' &&
      <form onSubmit={onSubmitCurrentTrainerWorkout}>
        <RaisedButton
          label="Continue Your Selected Trainer Workout"
          labelPosition="before"
          icon={<RightArrow color={fullWhite} />}
          primary
          fullWidth
          type="submit"
          style={styles.button}
        />
      </form>
    }

  </section>
);

Board.propTypes = {
  onSubmitOwnWorkout: PropTypes.func.isRequired,
  onSubmitTrainerWorkout: PropTypes.func.isRequired,
  onSubmitCurrentTrainerWorkout: PropTypes.func.isRequired,
  currentProgramId: PropTypes.string.isRequired,
};

export class DashboardContainer extends React.Component {
  onSubmitOwnWorkout = (event) => {
    event.preventDefault();
    const { showDialogModal } = this.props;
    showDialogModal('Not included in MVP', 'Sorry, this page is not part of the MVP, but it will be in the full version.');
  }

  onSubmitTrainerWorkout = (event) => {
    event.preventDefault();
    this.redirectTo('/dashboard/training-programs');
  }

  onSubmitCurrentTrainerWorkout = (event) => {
    event.preventDefault();
    const { currentProgramId } = this.props;
    if (currentProgramId !== '') {
      this.redirectTo(`/dashboard/training-programs/${currentProgramId}`);
    } // otherwise don't do anything
  }

  redirectTo = (path) => {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    return (<Board
      onSubmitOwnWorkout={this.onSubmitOwnWorkout}
      onSubmitTrainerWorkout={this.onSubmitTrainerWorkout}
      onSubmitCurrentTrainerWorkout={this.onSubmitCurrentTrainerWorkout}
      currentProgramId={this.props.currentProgramId}
    />);
  }
}

DashboardContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
  currentProgramId: PropTypes.string.isRequired,
  showDialogModal: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  currentProgramId: state.program.id || '',
});

export const mapDispatchToProps = dispatch => ({
  showDialogModal: (title, message) => dispatch(showModal(title, message)),
});

export default
RequiresLogin()(compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(DashboardContainer));
