import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css';
import WebFont from 'webfontloader';
import Landing from './pages/Landing';
import Header from './Header';
import Footer from './Footer';
import configureStore from '../configureStore';
import './Root.css';

WebFont.load({
  google: {
    families: ['Montserrat', 'Roboto:400,700', 'sans-serif'],
  },
});

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <div className="page-wrapper">
          <Header />
          <Landing />
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
