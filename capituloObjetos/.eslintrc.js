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
    'no-console': 'off',
    'prefer-object-spread': 'off',
    'max-len': 'off',
    'prefer-const': 'off',
    'no-restricted-syntax': 'off',

  },
};
