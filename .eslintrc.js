module.exports = {
  env: { es6: true, node: true },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prefer-arrow'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    indent: [ 'warn', 2 ],
    quotes: [ 'warn', 'single' ],
    semi: [ 'warn', 'never' ],
    'linebreak-style': [ 'warn', 'unix' ],
    'no-async-promise-executor': 'off',
    'prefer-arrow-callback': [ 'warn' ],
    'prefer-arrow/prefer-arrow-functions': [ 'warn' ],
    'eol-last': [ 'warn', 'always' ],
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'warn',
    'no-cond-assign': 'warn',
    'no-control-regex': 'warn',
    'no-useless-escape': 'warn',
    'no-dupe-else-if': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty': [ 'warn', { allowEmptyCatch: true } ],
    'no-empty-character-class': 'warn',
    'no-ex-assign': 'warn',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'warn',
    'no-extra-semi': 'warn',
    'no-import-assign': 'warn',
    'no-inner-declarations': 'warn',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [ 'warn', { skipStrings: false, skipRegExps: false, skipComments: false, skipTemplates: false } ],
    'no-misleading-character-class': 'warn',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'warn',
    'no-setter-return': 'warn',
    'no-sparse-arrays': 'off',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-undef': 'error',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'error',
    'no-multi-assign': 'off',
    'use-isnan': 'warn',
    'valid-typeof': 'error',
    'accessor-pairs': 'off',
    'array-callback-return': 'error'
  }
};
