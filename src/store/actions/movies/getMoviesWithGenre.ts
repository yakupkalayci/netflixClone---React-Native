import * as types from '../types';

import { SERVICES } from '../../constants/serviceConstants';

import { api } from '../api';

import { REACT_APP_API_KEY } from '@env';

export const getMoviesWithGenre = (genreID:number) => (dispatch) => {
  dispatch(
    api(
      'get',

      SERVICES.DISCOVER_MOVIES_SERVICE,

      `?api_key=${REACT_APP_API_KEY}&with_genres=${genreID}`,

      undefined,

      types.DISCOVER_MOVIES_WITH_GENRE_GET
    )
  );
};
