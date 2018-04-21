import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { loadState } from './localStorage';

// Persisted State
const persistedState = loadState();

const configureStore = () => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(
    reducer,
    persistedState, // add persistedState before the enhancer, i.e. applyMiddleware
    applyMiddleware(...middleware),
  );
};

export default configureStore;
