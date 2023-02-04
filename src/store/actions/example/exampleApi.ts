import * as types from 'src/store/actions/types';

import { SERVICES } from 'src/store/constants/serviceConstants';

import { api } from 'src/store/actions/api';

export const exampleApi = () => (dispatch) => {
  dispatch(
    api(
      'get',

      SERVICES.PROFILE_SERVICE,

      `/api/management/by/token`,

      undefined,

      types.EXAMPLE_TYPE
    )
  );
};
