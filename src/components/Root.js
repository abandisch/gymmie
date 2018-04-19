import React from 'react';
import 'normalize.css';
import WebFont from 'webfontloader';
import Landing from './pages/Landing';
import Header from './Header';
import Footer from './Footer';
import './Root.css';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif'],
  },
});

const Root = () => (
  <div>
    <div className="page-wrapper">
      <Header />
      <Landing />
    </div>
    <Footer />
  </div>
);

export default Root;
