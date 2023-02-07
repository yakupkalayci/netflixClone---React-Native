import * as types from '../types';

import { SERVICES } from 'src/store/constants/serviceConstants';

import { api } from '../api';

import { REACT_APP_API_KEY } from '@env';

export const getDailyTrendingMovies = () => (dispatch) => {
  dispatch(
    api(
      'get',

      SERVICES.TRENDING_MOVIES_SERVICE,

      `/day?api_key=${REACT_APP_API_KEY}`,

      undefined,

      types.DAILY_TRENDING_MOVIES_GET
    )
  );
};
