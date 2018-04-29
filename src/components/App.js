import React from 'react';
import { Route } from 'react-router-dom';
import 'normalize.css';
import WebFont from 'webfontloader';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Landing';
import OwnWorkoutPage from './pages/OwnWorkout';
import ProgramsPage from './pages/Programs';
import ExercisesPage from './pages/Exercises';
import Header from './Header';
import Footer from './Footer';
import DialogModal from './DialogModal';
import Navigation from './Navigation';
import './App.css';

WebFont.load({
  google: {
    families: ['Montserrat', 'Roboto:400,700', 'sans-serif'],
  },
});

const App = () => (
  <div>
    <Navigation />
    <div className="page-wrapper">
      <Header />
      <main role="main">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/my-workout" component={OwnWorkoutPage} />
        <Route exact path="/dashboard/training-programs" component={ProgramsPage} />
        <Route exact path="/dashboard/training-programs/:programId" component={ExercisesPage} />
      </main>
    </div>
    <Footer />
    <DialogModal />
  </div>);

export default App;
