import { MovieListData } from 'src/screens/home//_types/movieListData';

export const checkMovieList = (
  movieID: number,
  movieList: MovieListData[] | undefined
) => movieList?.find((movie) => movie.id === movieID) ? true : false;
