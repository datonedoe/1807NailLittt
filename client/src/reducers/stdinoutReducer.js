import { STDINOUT_IN, STDINOUT_CLEAR, STDINOUT_BACKSPACE } from '../types';

const initialState = {
  stdin: '',
  stdout: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STDINOUT_IN: {
      return { ...state, stdin: state.stdin + action.payload };
    }
    case STDINOUT_CLEAR: {
      return { ...state, stdin: '' };
    }
    case STDINOUT_BACKSPACE: {
      const newStdIn = state.stdin.length >= 1 ? state.stdin.slice(0, state.stdin.length - 1) : '';
      return { ...state, stdin: newStdIn };
    }
    default:
      return state;
  }
}
