
export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});

export const moviesFetchDataSuccess = movies => ({
  type: 'MOVIES_FETCH_DATA_SUCCESS',
  movies
});