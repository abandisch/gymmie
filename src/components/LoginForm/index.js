import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { ScaleLoader } from 'react-spinners';
import 'font-awesome/css/font-awesome.min.css';
import { requiredEmail, email, nonEmpty } from '../../utils/formValidators';
import { fetchJWT } from '../../actions';
import Input from '../TextInput';
import './LoginForm.css';

export const LoginFormComponent = ({ isLoadingLogin, onFormSubmitted }) => (
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
    {
      isLoadingLogin &&
      <div className="loading-container">
        <p className="loading">Logging in, please wait ...</p>
        <ScaleLoader color="#00bcd4" height={20} width={3} margin="2px" radius={10} />
      </div>
    }
    {!isLoadingLogin &&
      <RaisedButton
        label="Start Your Training Session"
        labelPosition="before"
        primary
        fullWidth
        type="submit"
      />
    }
  </Form>
);

LoginFormComponent.propTypes = {
  onFormSubmitted: PropTypes.func.isRequired,
  isLoadingLogin: PropTypes.bool.isRequired,
};

export class FormContainer extends React.Component {
  onFormSubmitted = () => (values) => {
    const { submitLogin } = this.props;
    const { emailAddress } = values; // add password here later on.
    submitLogin(emailAddress);
  }

  render() {
    const { handleSubmit, isLoadingLogin } = this.props;
    return (<LoginFormComponent
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

