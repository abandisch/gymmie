import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import loading from './loading';

export default combineReducers({
  form: formReducer,
  user,
  loading,
});
