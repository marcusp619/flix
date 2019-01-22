
export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const hasErrored = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.message;
    default:
      return state;
  }
};

export const movies = (state = [], action) => {
  switch (action.type) {
    case 'MOVIES_FETCH_DATA_SUCCESS':
      return action.movies;
    default:
      return state;
  }
}