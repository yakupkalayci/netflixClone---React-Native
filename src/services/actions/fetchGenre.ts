import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';

export const fetchGenre = async (id: number) => {
  const {data} = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`,
  );
  return data.genres.find(genre => genre.id === id);
};
