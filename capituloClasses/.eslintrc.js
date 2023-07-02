module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-useless-return': 'off',
    'prefer-const': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
  },
};
