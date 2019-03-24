import {
  SET_PRODUCTS,
  GET_PRODUCTS
} from './types';

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const getProducts = () => ({
  type: GET_PRODUCTS
})