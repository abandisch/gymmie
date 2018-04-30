import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import throttle from 'lodash/throttle';
import GraphQLWrapper from './GraphQLWrapper';
import configureStore from '../configureStore';
import { saveState } from '../localStorage';
import App from './App';

const store = configureStore();

export const saveStoreState = () => {
  saveState({
    user: store.getState().user,
    program: store.getState().program,
  });
};

store.subscribe(throttle(saveStoreState), 1000);

const Root = () => (
  <GraphQLWrapper>
    <Provider store={store}>
      <Router>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  </GraphQLWrapper>
);

export default Root;
