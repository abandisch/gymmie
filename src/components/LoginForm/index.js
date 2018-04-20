import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import 'font-awesome/css/font-awesome.min.css';
import { requiredEmail, email, nonEmpty } from './validators';
import { fetchJWT } from '../../actions';
import Input from '../TextInput';
import './LoginForm.css';

export const LoginForm = ({ isLoadingLogin, onFormSubmitted }) => (
  <Form className="login-form" onSubmit={onFormSubmitted}>
    <span>Enter your email address to get started</span>
    <Field
      name="emailAddress"
      label="Your Email Address"
      placeholder="you@domain.com"
      maxLength={100}
      component={Input}
      type="email"
      validate={[requiredEmail, nonEmpty, email]}
    />
    {isLoadingLogin && <p className="loading">Please wait ...</p>}
    {!isLoadingLogin &&
      <RaisedButton
        label="Start Your Training Session"
        labelPosition="before"
        icon={<PlayCircleOutline color={fullWhite} />}
        primary
        fullWidth
        type="submit"
      />
    }
  </Form>
);

LoginForm.propTypes = {
  onFormSubmitted: PropTypes.func.isRequired,
  isLoadingLogin: PropTypes.bool.isRequired,
};

class FormContainer extends React.Component {
  onFormSubmitted = () => (values) => {
    const { submitLogin } = this.props;
    const { emailAddress } = values; // add password here later on.
    submitLogin(emailAddress);
  }

  render() {
    const { handleSubmit, isLoadingLogin } = this.props;
    return (<LoginForm
      isLoadingLogin={isLoadingLogin}
      onFormSubmitted={handleSubmit(this.onFormSubmitted())}
    />);
  }
}

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  isLoadingLogin: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  isLoadingLogin: !!state.loading.login,
});

export const mapDispatchToProps = dispatch => ({
  submitLogin: emailAddress => dispatch(fetchJWT(emailAddress)),
});

export default compose(
  reduxForm({
    form: 'loginForm',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(FormContainer);

