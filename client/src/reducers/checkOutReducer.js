import { ADD_ITEM_TO_CHECKOUT } from '../types';

const initialState = {
  items: [],
  amountPreTax: 0,
  taxAmount: 0,
  amountAfterTax: 0,
};

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case ADD_ITEM_TO_CHECKOUT: {
      const amountPreTax = state.amountPreTax + payload.price;
      const taxAmount = Math.floor(amountPreTax * 0.0925);
      return {
        ...state,
        items: [payload, ...state.items],
        amountPreTax,
        taxAmount,
        amountAfterTax: amountPreTax + taxAmount,
      };
    }

    default:
      return state;
  }
}
