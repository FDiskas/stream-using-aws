module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'prettier', 'react'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'error',
    'no-useless-constructor': 'off',
    'no-console': 'error',
    'class-methods-use-this': 'off',
    'import/named': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], ['internal', 'sibling', 'parent', 'index'], 'unknown'],
      },
    ],
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'newline-before-return': 'error',
    'max-classes-per-file': ['error', 2],
    'react/jsx-props-no-spreading': 'off',
    'lines-around-directive': [
      'error',
      {
        before: 'never',
        after: 'always',
      },
    ],
    'lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/ban-ts-ignore': 'warn',
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-no-bind': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-variables',
          'instance-variables',
          'static-methods',
          'instance-methods',
          'getters',
          'setters',
          'lifecycle',
          '/^on.+/',
          '/^handle.+$/',
          'everything-else',
          'render',
          '/^render.+$/',
        ],
      },
    ],
    'react/static-property-placement': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['class', 'return', 'export'],
      },
    ],
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    jasmine: true,
  },
  globals: {
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
  },
  settings: {
    parser: 'typescript-eslint-parser',
    rules: {
      'import/no-unresolved': 'error',
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    optionalChaining: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
