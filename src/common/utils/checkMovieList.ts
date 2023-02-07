import { Dispatch, SetStateAction } from 'react';
import { MovieListData } from 'src/screens/home//_types/movieListData';

export const checkMovieList = (
  movieID: number,
  movieList: MovieListData[],
  setMovieListCheck: Dispatch<SetStateAction<boolean>>
) => {
  setMovieListCheck(() => (movieList?.find((movie) => movie.id === movieID) ? true : false));
};
