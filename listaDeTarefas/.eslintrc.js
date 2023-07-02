module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'prefer-const': 'off',
    'no-restricted-syntax': 'off',
  },
};
