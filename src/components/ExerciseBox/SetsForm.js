import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import PlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import NotInterested from 'material-ui/svg-icons/av/not-interested';
import { Field, reduxForm, reset, Form } from 'redux-form';
import TextInput from '../TextInput';
import { addSetToExercise } from '../../actions';
import { nonEmpty, requiredWeight, requiredReps } from '../../utils/formValidators';
import './SetsForm.css';
import './SetsForm-media-queries.css';

const styles = {
  button: {
    marginBottom: 10,
  },
};

export const InputForm = ({
  showForm, onPressToggleForm, onFormSubmitted,
}) => (
  showForm ?
    <Form className="add-set" autoComplete="off" onSubmit={onFormSubmitted}>
      <Field
        name="weight"
        label="Weight"
        placeholder="E.g. 10 or Body Weight"
        maxLength={30}
        component={TextInput}
        validate={[requiredWeight, nonEmpty]}
      />
      <Field
        name="reps"
        label="Reps"
        placeholder="Number of reps"
        maxLength={20}
        type="number"
        component={TextInput}
        validate={[requiredReps, nonEmpty]}
      />
      <RaisedButton
        label="Save"
        icon={<PlaylistAddCheck color={fullWhite} />}
        primary
        fullWidth
        style={styles.button}
        type="submit"
      />
      <RaisedButton
        onClick={onPressToggleForm}
        label="Cancel"
        icon={<NotInterested color={fullWhite} />}
        secondary
        fullWidth
        style={styles.button}
      />
    </Form> :
    <form className="add-set">
      <RaisedButton
        onClick={onPressToggleForm}
        label="Add Set"
        icon={<PlaylistAdd color={fullWhite} />}
        primary
        fullWidth
      />
    </form>
);

InputForm.propTypes = {
  onFormSubmitted: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  onPressToggleForm: PropTypes.func.isRequired,
};

export class SetForm extends React.Component {
  state = {
    showForm: false,
  }

  onPressToggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
    this.resetForm();
  }

  onFormSubmitted = () => (values) => {
    const { addExerciseSet } = this.props;
    const { weight, reps } = values;
    this.hideForm();
    this.resetForm();
    addExerciseSet(weight, reps);
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  }

  resetForm = () => {
    const { resetForm } = this.props;
    resetForm();
  }

  render() {
    const { handleSubmit } = this.props; // handleSubmit is from redux-form
    return (
      <InputForm
        onFormSubmitted={handleSubmit(this.onFormSubmitted())}
        showForm={this.state.showForm}
        onPressToggleForm={this.onPressToggleForm}
      />);
  }
}

SetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  exerciseId: PropTypes.string.isRequired,
  resetForm: PropTypes.func.isRequired,
  addExerciseSet: PropTypes.func.isRequired,
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  resetForm: () => dispatch(reset('setForm')),
  addExerciseSet: (weight, reps) =>
    dispatch(addSetToExercise(ownProps.exerciseId, { weight, reps })),
});

export default compose(
  reduxForm({
    form: 'setForm',
  }),
  connect(null, mapDispatchToProps),
)(SetForm);
