export const checkMovieList = (useAppSelector, movieID: number) => {
  const movieList = useAppSelector(
    state => state.users.usersData.activeUser.movieList,
  );
  return movieList.find(movie => movie.id === movieID);
};
