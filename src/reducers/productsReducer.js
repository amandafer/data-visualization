import produce from 'immer';

import { SET_PRODUCTS, GET_PRODUCTS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  // produce(state, draft => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state.products = action.products;

    case GET_PRODUCTS:
      return state.products;

    default:
      return state
  }
  // });
};
