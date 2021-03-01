// eslint-disable-next-line import/no-commonjs
module.exports = {
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  rules: {
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          Object: {
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          '{}': {
            message:
              'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
            fixWith: 'Record<string, unknown>',
          },
          object: {
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          Function: 'Use a specific function type instead, like `() => void`.',
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T', 'K'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'field',

          'constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'method',
          'signature',
        ],
      },
    ],
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/triple-slash-reference': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        args: 'after-used',
      },
    ],
    '@typescript-eslint/comma-spacing': ['error'],
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/prefer-as-const': ['error'],
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/prefer-function-type': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': ['error'],
    '@typescript-eslint/prefer-namespace-keyword': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-ts-expect-error': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unified-signatures': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-shadow': ['error'],

    // Disable rules superset by @typescript-eslint
    'no-redeclare': ['off'],
    'no-unused-vars': ['off'],
    'no-use-before-define': ['off'],
    'no-shadow': ['off'],
    camelcase: ['off'],
    'no-array-constructor': ['off'],
    'no-useless-constructor': ['off'],

    // Handled by prettier
    '@typescript-eslint/brace-style': ['off'],
    '@typescript-eslint/comma-dangle': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/keyword-spacing': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-semi': ['off'],
    '@typescript-eslint/quotes': ['off'],
    '@typescript-eslint/semi': ['off'],
    '@typescript-eslint/space-before-function-paren': ['off'],
    '@typescript-eslint/space-infix-ops': ['off'],
    '@typescript-eslint/ban-tslint-comment': ['off'],
    '@typescript-eslint/class-literal-property-style': ['off'], // useless
    '@typescript-eslint/consistent-indexed-object-style': ['off'], // Also modify type and interface
    '@typescript-eslint/method-signature-style': ['error'],

    // disabled => because will warn to every explicit "any"
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],

    // disabled => because will warn for every not typed but correctly infered type var
    '@typescript-eslint/typedef': [
      'off',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      },
    ],

    // To decide
    '@typescript-eslint/no-for-in-array': ['off'],
    '@typescript-eslint/prefer-for-of': ['off'],

    // Disabled => Require slow parser. Requires parserOptions.project above to enable them
    // '@typescript-eslint/no-throw-literal': ['off'],
    '@typescript-eslint/await-thenable': ['off'],
    '@typescript-eslint/no-base-to-string': ['off'],
    '@typescript-eslint/no-confusing-void-expression': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/no-implied-eval': ['off'],
    '@typescript-eslint/no-misused-promises': ['off'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],
    '@typescript-eslint/no-unnecessary-condition': ['off'],
    '@typescript-eslint/no-unnecessary-qualifier': ['off'],
    '@typescript-eslint/no-unnecessary-type-arguments': ['off'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
    '@typescript-eslint/no-unnecessary-type-constraint': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-call': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    '@typescript-eslint/prefer-includes': ['off'],
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
    '@typescript-eslint/prefer-readonly': ['off'],
    '@typescript-eslint/prefer-reduce-type-parameter': ['off'],
    '@typescript-eslint/prefer-regexp-exec': ['off'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['off'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/require-array-sort-compare': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/switch-exhaustiveness-check': ['off'],
    '@typescript-eslint/unbound-method': ['off'],

    // Disabled
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['off'], // unecessary
    '@typescript-eslint/no-dynamic-delete': ['off'], // to complicated for the small benefits
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-implicit-any-catch': ['off'], // to complicated for the small benefits
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-invalid-void-type': ['off'], // needs to return undefined
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-this-alias': ['off'], // to complicated for the small benefits
    '@typescript-eslint/no-type-alias': ['off'],
  },

  // Mixed codebase issues
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            // allowExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
      },
    },
  ],
};
