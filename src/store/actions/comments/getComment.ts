import * as types from '../types';

import { SERVICES } from '../../constants/serviceConstants';

import { api } from '../api';

export const getComments = () => (dispatch) => {
  dispatch(
    api(
      'get',

      SERVICES.COMMENTS_SERVICE, 

      '',

      undefined,

      types.GET_COMMENTS
    )
  );
};
