import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css';
import WebFont from 'webfontloader';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Landing';
import OwnWorkoutPage from './pages/OwnWorkout';
import ProgramsPage from './pages/Programs';
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
    <Router>
      <MuiThemeProvider>
        <div>
          <div className="page-wrapper">
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/my-workout" component={OwnWorkoutPage} />
            <Route exact path="/dashboard/training-programs" component={ProgramsPage} />
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;
