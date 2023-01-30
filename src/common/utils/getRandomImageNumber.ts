import {MoviesObjectType} from '../screens/HomeScreen';

export const getRandomImageNumber = (
  movies: MoviesObjectType,
  setRandomImage: React.Dispatch<React.SetStateAction<number>>,
) => {
  const random = Math.floor(Math.random() * movies.day.length) + 1;
  setRandomImage(random);
};
