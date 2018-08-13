import { combineReducers } from 'redux';

// Reducers
import dataReducer from './data-reducer';

export default (combineReducers({
  data: dataReducer,
}));
