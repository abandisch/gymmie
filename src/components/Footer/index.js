import React from 'react';
import './Footer.css';

const currentYear = new Date().toISOString().split('-')[0];

const Footer = () => (
  <footer role="contentinfo">
    <div className="footer-contents">
      <p>Gymmie by Alex Bandisch</p>
      <p>&copy; {currentYear}</p>
      <p><a href="mailto:alex@bandisch.com">Contact Me <i className="fa fa-envelope" aria-hidden="true" /></a></p>
    </div>
  </footer>
);

export default Footer;
