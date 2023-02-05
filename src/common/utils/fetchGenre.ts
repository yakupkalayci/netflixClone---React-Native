import axios from 'axios';
import { REACT_APP_API_URL, REACT_APP_API_KEY } from '@env';

export const fetchGenre = async (id: number) => {
  const { data } = await axios.get(
    `${REACT_APP_API_URL}/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`
  );

  return data?.genres?.find((genre) => genre.id === id);
};
