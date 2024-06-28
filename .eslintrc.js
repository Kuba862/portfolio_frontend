module.exports = {
    parser: '@babel/eslint-parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    plugins: [
      'import',
      'react',
    ],
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true, // Add this line to enable Jest globals
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      requireConfigFile: false,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'react/jsx-pascal-case': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  };
  