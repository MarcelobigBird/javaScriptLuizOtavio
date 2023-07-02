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
    'prefer-const': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
  },
};
