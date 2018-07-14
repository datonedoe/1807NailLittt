module.exports = {
  extends: 'airbnb',
  rules: {
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id', '__REDUX_DEVTOOLS_EXTENSION__'] }],
    'no-mixed-operators': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
};
