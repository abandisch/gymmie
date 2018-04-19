import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './LoginForm.css';

const LoginForm = () => (
  <form className="login-form">
    <label htmlFor="emailAddress">Enter your email address to get started:
      <input type="email" id="emailAddress" name="emailAddress" placeholder="Your Email Address" required />
    </label>
    <button className="btn btn-start"><i className="fa fa-play" /> Start Your Training Session</button>
  </form>
);

export default LoginForm;
