import { ADD_ITEM_TO_CHECKOUT } from '../types';

export const addItemToCheckout = item => ({
  type: ADD_ITEM_TO_CHECKOUT,
  payload: item,
});
