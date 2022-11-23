module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:sonarjs/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sonarjs'],
  rules: {},
}
