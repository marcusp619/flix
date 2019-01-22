import { isLoading, hasErrored, moviesFetchDataSuccess } from '../actions';
import axios from 'axios';

export const fetchMovies = query => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const result = await axios.get('http://localhost:4000/graphql', {
        params: {
          query
        }
      });
      if (!result.status === 200) {
        throw Error(result.statusText);
      }
      dispatch(isLoading(false));
      dispatch(moviesFetchDataSuccess(result.data.data.movies));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};