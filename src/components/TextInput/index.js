import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = ({
  type, autoComplete, input, placeholder, label, meta: { touched, error },
}) => (<TextField
  floatingLabelText={label}
  errorText={touched && error}
  autoComplete={autoComplete}
  hintText={placeholder}
  fullWidth
  type={type}
  {...input}
/>);

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({}),
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({}),
};

TextInput.defaultProps = {
  autoComplete: null,
  type: 'text',
  input: null,
  meta: {
    touched: false,
    error: false,
    warning: false,
  },
};

export default TextInput;
