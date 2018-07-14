import {
  STDINOUT_IN, STDINOUT_OUT, STDINOUT_CLEAR, STDINOUT_BACKSPACE,
} from '../types';

export const addToStdInOut = input => ({
  type: STDINOUT_IN,
  payload: input,
});

export const clearStdInOut = () => ({
  type: STDINOUT_CLEAR,
});

export const backspaceStdInOut = () => ({
  type: STDINOUT_BACKSPACE,
});
