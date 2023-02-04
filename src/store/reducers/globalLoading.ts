import * as types from '../actions/types';

const initialState = {
  isLoading: false
};

export default function globalLoading(state = initialState, action) {
  switch (action.type) {
    case types.GLOBAL_LOADING_ACTIVE:
      return {
        ...state,
        isLoading: true
      };
    case types.GLOBAL_LOADING_PASSIVE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
