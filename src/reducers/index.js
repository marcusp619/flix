import { combineReducers } from 'redux';
import { isLoading, hasErrored, movies } from './moviesReducer';

export const rootReducer = combineReducers({
  movies,
  isLoading,
  hasErrored
});
