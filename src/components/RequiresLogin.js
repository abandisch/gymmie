import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => (Component) => {
  function RequiresLogin(props) {
    const {
      authenticating, loggedIn, ...passThroughProps // ,error
    } = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn) { // (!loggedIn || error) {
      return <Redirect to="/" />;
    }

    return <Component {...passThroughProps} />;
  }

  RequiresLogin.propTypes = {
    authenticating: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    // error: PropTypes.string.isRequired,
  };

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = state => ({
    authenticating: state.loading.login,
    loggedIn: state.user.gymTrackerJWT !== undefined,
    // error: state.auth.error,
  });

  return connect(mapStateToProps)(RequiresLogin);
};
