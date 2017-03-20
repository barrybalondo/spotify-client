import { combineReducers } from 'redux';
import PeoplesReducer from './reducer_peoples';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  peoples: PeoplesReducer,
  form: formReducer
});

export default rootReducer;