import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {MoviesObjectType} from '../../screens/HomeScreen';

export const fetchMovies = async (
  setMovies: React.Dispatch<React.SetStateAction<MoviesObjectType>>,
) => {
  try {
    const [req1, req2, req3] = await Promise.all([
      axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`),
      axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`),
      axios.get(
        `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
      ),
    ]);

    setMovies({
      day: req1.data.results,
      week: req2.data.results,
      contiuneWatching: req3.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
