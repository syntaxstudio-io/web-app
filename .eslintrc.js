module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    process: true,
    React: 'writable',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      classes: true,
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks', 'promise'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin

    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.,
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  rules: {
    'no-console': 'off',
    'no-bitwise': 'off',
    'sort-keys': 'off',
    'no-underscore-dangle': 'warn',
    'comma-dangle': 'off',

    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'always-multiline',
    //     exports: 'always-multiline',
    //     functions: 'never',
    //   },
    // ],

    'consistent-return': 'off',
    'no-nested-ternary': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],

    'prettier/prettier': 'error',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-submodule-imports': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/jsx-no-lambda': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/camelcase': 'off',

    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/img-redundant-alt': 'off',

    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
