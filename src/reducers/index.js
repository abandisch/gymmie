import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import loading from './loading';
import program from './program';

export default combineReducers({
  form: formReducer,
  user,
  loading,
  program,
});
