import React from 'react';
import './Header.css';

const logo = require('../../images/app-icon.png');

const Heading = () => (
  <header>
    <div className="container">
      <h1><img src={logo} alt="Gymmie Logo" /> Gymmie</h1>
      <span>Workout Tracking Buddy</span>
    </div>
  </header>
);

export default Heading;
