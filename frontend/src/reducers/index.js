import { postReducer } from './post';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  postState: postReducer
});