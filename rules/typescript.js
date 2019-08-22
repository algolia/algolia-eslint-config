// eslint-disable-next-line import/no-commonjs
module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-types': ['error'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/camelcase': ['error'],
    '@typescript-eslint/class-name-casing': ['error'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/generic-type-naming': ['error', '^T[A-Z][a-zA-Z]+$'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/member-naming': ['off'],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: ['static-field'],
      },
    ],
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-for-in-array': ['off'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-triple-slash-reference': ['error'],
    '@typescript-eslint/no-type-alias': ['off'],
    '@typescript-eslint/no-unnecessary-qualifier': ['off'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/prefer-for-of': ['off'],
    '@typescript-eslint/prefer-function-type': ['error'],
    '@typescript-eslint/prefer-interface': ['off'],
    '@typescript-eslint/prefer-namespace-keyword': ['error'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['off'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unbound-method': ['off'],
    '@typescript-eslint/unified-signatures': ['error'],

    // Disable rules superset by @typescript-eslint
    'no-unused-vars': ['off'],
    'no-use-before-define': ['off'],
    camelcase: ['off'],
    'no-array-constructor': ['off'],
    'no-useless-constructor': ['off'],
  },
};
