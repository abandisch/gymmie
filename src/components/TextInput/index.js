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
/* export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
          <Element
            {...this.props.input}
            id={this.props.input.name}
            type={this.props.type}
            ref={input => (this.input = input)}
          />
        </label>
      </div>
    );
  }
}
 */

