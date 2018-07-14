import { APPOINTMENT_PICK_DATE } from '../types';

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case APPOINTMENT_PICK_DATE:
      return { ...state, ...payload };

    default:
      return state;
  }
}
