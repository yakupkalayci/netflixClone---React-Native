import {TrendingMoviesObjectType} from '../screens/HomeScreen';

export const getRandomImageNumber = (
  trendingMovies: TrendingMoviesObjectType,
  setRandomImage: React.Dispatch<React.SetStateAction<number>>,
) => {
  const random = Math.floor(Math.random() * trendingMovies.day.length) + 1;
  setRandomImage(random);
};
