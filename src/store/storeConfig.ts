export const STORE_CONFIG: Record<string, Record<string, string | boolean>> = {
  DAILY_TRENDING_MOVIES_GET: {
    serviceName: 'getDailyTrendingMovies',
    successMessage: false,
    errorMessage: true
  },
  WEEKLY_TRENDING_MOVIES_GET: {
    serviceName: 'getWeeklyTrendingMovies',
    successMessage: false,
    errorMessage: true
  },
  DISCOVER_MOVIES_WITH_GENRE_GET: {
    serviceName: 'getMoviesWithGenre',
    successMessage: false,
    errorMessage: true
  },
  GET_COMMENTS: {
    serviceName: 'getComments',
    successMessage: false,
    errorMessage: true
  },
  ADD_COMMENT: {
    serviceName: 'addComment',
    successMessage: false,
    errorMessage: true
  },
  DELETE_COMMENT: {
    serviceName: 'deleteComment',
    successMessage: true,
    errorMesage: true
  }
};
