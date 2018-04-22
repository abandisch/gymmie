import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css';
import WebFont from 'webfontloader';
import throttle from 'lodash/throttle';
import GraphQLWrapper from './GraphQLWrapper';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Landing';
import OwnWorkoutPage from './pages/OwnWorkout';
import ProgramsPage from './pages/Programs';
import ExercisesPage from './pages/Exercises';
import Header from './Header';
import Footer from './Footer';
import DialogModal from './DialogModal';
import configureStore from '../configureStore';
import { saveState } from '../localStorage';
import Navigation from './Navigation';
import './Root.css';

WebFont.load({
  google: {
    families: ['Montserrat', 'Roboto:400,700', 'sans-serif'],
  },
});

const store = configureStore();

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
    program: store.getState().program,
  });
}), 1000);

const Root = () => (
  <GraphQLWrapper>
    <Provider store={store}>
      <Router>
        <MuiThemeProvider>
          <div>
            <Navigation />
            <div className="page-wrapper">
              <Header />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/dashboard/my-workout" component={OwnWorkoutPage} />
              <Route exact path="/dashboard/training-programs" component={ProgramsPage} />
              <Route exact path="/dashboard/training-programs/:programId" component={ExercisesPage} />
            </div>
            <Footer />
            <DialogModal />
          </div>
        </MuiThemeProvider>
      </Router>
    </Provider>
  </GraphQLWrapper>
);

export default Root;
