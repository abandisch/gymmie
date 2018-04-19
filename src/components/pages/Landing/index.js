import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Intro from '../../Intro';
import LoginForm from '../../LoginForm';

const Landing = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <Intro />
      <LoginForm />
    </section>
  );
};

Landing.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  isLoggedIn: state.user.gymTrackerJWT !== undefined,
});

export default connect(mapStateToProps)(Landing);
