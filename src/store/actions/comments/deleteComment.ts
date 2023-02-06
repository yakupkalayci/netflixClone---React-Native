import * as types from '../types';

import { SERVICES } from '../../constants/serviceConstants';

import { api } from '../api';

import { getComments } from './getComment';

export const deleteComment = (id) => (dispatch) => {
  dispatch(
    api(
      'delete',

      SERVICES.COMMENTS_SERVICE,

      `/${id}`,

      undefined,

      types.DELETE_COMMENT,
      [getComments()]
    )
  );
};
