import * as types from '../types';

import { SERVICES } from '../../constants/serviceConstants';

import { api } from '../api';

import { getComments } from './getComment';

export const addComment = (params) => (dispatch) => {
  dispatch(
    api(
      'post',

      SERVICES.COMMENTS_SERVICE,

      '',

      params,

      types.ADD_COMMENT,
      [getComments()]
    )
  );
};
