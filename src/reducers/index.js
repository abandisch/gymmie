import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import loading from './loading';
import program from './program';
import exercises from './exercises';
import modal from './modal';

export default combineReducers({
  form: formReducer,
  user,
  loading,
  program,
  exercises,
  modal,
});
