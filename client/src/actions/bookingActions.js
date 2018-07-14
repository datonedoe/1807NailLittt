import { APPOINTMENT_PICK_DATE } from '../types';

export const pickDate = date => ({
  type: APPOINTMENT_PICK_DATE,
  payload: { pickedDate: date },
});
