import * as types from '../types';

import { SERVICES } from 'src/store/constants/serviceConstants';

import { api } from '../api';

import { REACT_APP_API_KEY } from '@env';

export const getWeeklyTrendingMovies = () => (dispatch) => {
  dispatch(
    api(
      'get',

      SERVICES.TRENDING_MOVIES_SERVICE,

      `/week?api_key=${REACT_APP_API_KEY}`,

      undefined,

      types.WEEKLY_TRENDING_MOVIES_GET
    )
  );
};
