module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  // rules: {
  //   //quotes: ["error", "single"],
  //   //quotes: [2, "single", "avoid-escape"],
  //   //semi: ['error', 'always'],
  //   //'prefer-const': [true, { destructuring: 'all' }],
  // },
};
