import { isLoading, hasErrored, moviesFetchDataSuccess } from '../actions';
import axios from 'axios';

export const fetchMovies = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const result = axios.get(url);
      if (!result.ok) {
        throw Error(result.statusText);
      }
      dispatch(isLoading(false));
      dispatch(moviesFetchDataSuccess(result.data.results))
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};