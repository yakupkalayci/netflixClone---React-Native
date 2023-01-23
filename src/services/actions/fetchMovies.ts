import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {TrendingMoviesObjectType} from '../../screens/HomeScreen';

export const getTrendingToday = async (
  trendingMovies: TrendingMoviesObjectType,
  setTrendingMovies: React.Dispatch<
    React.SetStateAction<TrendingMoviesObjectType>
  >,
) => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
    );
    setTrendingMovies({...trendingMovies, day: data.results});
  } catch (error) {
    console.log(error);
  }
};
export const getTrendingWeek = async (
  trendingMovies: TrendingMoviesObjectType,
  setTrendingMovies: React.Dispatch<
    React.SetStateAction<TrendingMoviesObjectType>
  >,
) => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`,
    );
    setTrendingMovies({...trendingMovies, week: data.results});
  } catch (error) {
    console.log(error);
  }
};
export const getContiuneWatching = async (
  trendingMovies: TrendingMoviesObjectType,
  setTrendingMovies: React.Dispatch<
    React.SetStateAction<TrendingMoviesObjectType>
  >,
) => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
    );
    setTrendingMovies({...trendingMovies, contiuneWatching: data.results});
  } catch (error) {
    console.log(error);
  }
};
