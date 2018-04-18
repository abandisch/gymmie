import React from 'react';
import 'normalize.css';
import WebFont from 'webfontloader';
import Header from '../components/Header';
import './Root.css';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif'],
  },
});

const Root = () => (
  <div className="page-wrapper">
    <Header />
  </div>
);

export default Root;
