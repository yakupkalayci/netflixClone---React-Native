import { Dispatch, SetStateAction } from 'react';

export const checkMovieList = (
  movieID: number,
  movieList: [],
  setMovieListCheck: Dispatch<SetStateAction<boolean>>
) => {
  setMovieListCheck(() => (movieList.find((movie) => movie.id === movieID) ? true : false));
};
