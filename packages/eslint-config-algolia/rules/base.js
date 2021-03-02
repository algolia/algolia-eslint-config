// eslint-disable-next-line import/no-commonjs
module.exports = {
  rules: {
    // Possible errors
    // http://eslint.org/docs/rules/#possible-errors
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error'],
    'no-console': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty-character-class': ['error'],
    'no-empty': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': ['error'],
    'no-extra-semi': ['error'],
    'no-func-assign': ['error'],
    'no-import-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-loss-of-precision': ['error'],
    'no-misleading-character-class': 'error',
    'no-negated-in-lhs': ['off'],
    'no-obj-calls': ['error'],
    'no-promise-executor-return': ['error'],
    'no-prototype-builtins': ['off'],
    'no-regex-spaces': ['error'],
    'no-setter-return': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable-loop': ['error', { ignore: [] }],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],
    'no-useless-backreference': ['error'],
    'require-atomic-updates': ['off'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['off'],
    'valid-typeof': ['error'],

    // Best practices
    // http://eslint.org/docs/rules/#best-practices
    'accessor-pairs': ['error'],
    'array-callback-return': ['error'],
    'block-scoped-var': ['error'],
    'class-methods-use-this': ['off'],
    complexity: ['error'],
    'consistent-return': ['error'],
    curly: ['error'],
    'default-case': ['error'],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    'dot-location': ['off'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'grouped-accessor-pairs': ['error'],
    'guard-for-in': ['error'],
    'max-classes-per-file': ['warn', 1],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-constructor-return': ['error'],
    'no-div-regex': ['error'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['off'],
    'no-empty-pattern': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-coercion': ['error', { string: false }],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['off'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': ['off'],
    'no-multi-assign': ['error'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error', { props: true }],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-return-assign': ['error'],
    'no-return-await': ['off'],
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-labels': ['error'],
    'no-useless-call': ['error'],
    'no-useless-catch': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['error'],
    'no-with': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-named-capture-group': ['off'],
    'prefer-regex-literals': ['off'],
    radix: ['error'],
    'require-await': ['error'],
    'vars-on-top': ['error'],
    'wrap-iife': ['error'],
    yoda: ['error'],

    // Strict mode
    // http://eslint.org/docs/rules/#strict-mode
    strict: ['error', 'never'],

    // Variables
    // http://eslint.org/docs/rules/#variables
    'init-declarations': ['off'],
    'no-catch-shadow': ['error'],
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['error', 'event'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undefined': ['off'],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: false }],

    // Node.js and Common.js
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    'callback-return': ['off'],
    'global-require': ['off'],
    'handle-callback-err': ['error'],
    'no-mixed-requires': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['off'],
    'no-process-exit': ['error'],
    'no-restricted-modules': ['error'],
    'no-sync': ['off'],

    // Stylistic issues
    // http://eslint.org/docs/rules/#stylistic-issues
    'array-bracket-spacing': ['error'],
    'block-spacing': ['error'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error'],
    'consistent-this': ['error'],
    'eol-last': ['error'],
    'func-call-spacing': ['error'],
    'func-names': ['off'],
    'func-style': ['off'],
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    indent: ['error', 2],
    'jsx-quotes': ['error'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error'],
    'lines-around-comment': ['off'],
    'max-depth': ['error'],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'max-lines': ['off'],
    'max-nested-callbacks': ['error'],
    'max-params': ['error', 5],
    'multiline-ternary': ['off'],
    'max-statements': ['off'],
    'max-statements-per-line': ['off'],
    'new-cap': ['error'],
    'new-parens': ['error'],
    'newline-after-var': ['off'],
    'newline-before-return': ['off'],
    'newline-per-chained-call': ['off'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-continue': ['error'],
    'no-inline-comments': ['off'],
    'no-lonely-if': ['error'],
    'no-mixed-operators': ['off'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['off'],
    'no-restricted-syntax': ['off'],
    'no-tabs': ['error'],
    'no-ternary': ['off'],
    'no-trailing-spaces': ['error'],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-newline': ['off'],
    'object-curly-spacing': ['error'],
    'object-property-newline': ['off'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error'],
    'operator-assignment': ['off'],
    'operator-linebreak': ['off'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    quotes: ['error', 'single'],
    'require-jsdoc': ['off'],
    semi: ['error'],
    'semi-spacing': ['error'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'space-before-blocks': ['off'],
    'space-before-function-paren': ['off'],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error'],
    'spaced-comment': ['error'],
    'unicode-bom': ['error'],
    'wrap-regex': ['error'],

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    'arrow-body-style': ['error'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error'],
    'constructor-super': ['error'],
    'generator-star-spacing': ['error'],
    'no-class-assign': ['error'],
    'no-confusing-arrow': ['off'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-imports': ['off'],
    'no-new-symbol': ['error'],
    'no-restricted-imports': ['off'],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-reflect': ['off'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'require-yield': ['error'],
    'rest-spread-spacing': ['error'],
    'sort-imports': ['off'],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error'],
    'yield-star-spacing': ['error'],

    // Comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': ['error'],
    'eslint-comments/no-duplicate-disable': ['error'],
    'eslint-comments/no-unlimited-disable': ['error'],
    'eslint-comments/no-unused-disable': ['error'],
    'eslint-comments/no-unused-enable': ['error'],

    // Import
    // https://github.com/benmosher/eslint-plugin-import
    'import/dynamic-import-chunkname': 'error',
    'import/extensions': ['error', 'never'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': ['error'],
    'import/no-commonjs': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-named-as-default': 'error',
    'import/no-unresolved': ['error'],
    'import/no-unused-modules': ['off', { unusedExports: true }],
    'import/no-useless-path-segments': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    // Prettier
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'es5',
        useTabs: false,
        quoteProps: 'as-needed',
      },
    ],

    // ---- JSDoc
    'jsdoc/check-alignment': ['error'],
    'jsdoc/check-examples': [
      'error',
      { checkEslintrc: true, exampleCodeRegex: '```js ([\\s\\S]*)```' },
    ],
    'jsdoc/check-indentation': ['off'],
    'jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: true,
        allowExtraTrailingParamDocs: true,
      },
    ],
    'jsdoc/check-syntax': ['error'],
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['required', 'swagger'],
      },
    ],
    'jsdoc/check-types': ['error'],
    'jsdoc/implements-on-classes': ['error'],
    'jsdoc/match-description': ['error'],
    'jsdoc/newline-after-description': ['error'],
    'jsdoc/no-undefined-types': ['error'],
    'jsdoc/require-description': ['error'],
    'jsdoc/require-description-complete-sentence': ['error'],
    'jsdoc/require-example': ['off'],
    'jsdoc/require-hyphen-before-param-description': ['error'],
    'jsdoc/require-jsdoc': ['off'],
    'jsdoc/require-param-description': ['error'],
    'jsdoc/require-param-name': ['error'],
    'jsdoc/require-returns-check': ['error'],
    'jsdoc/require-returns-description': ['error'],
    'jsdoc/valid-types': ['error'],
  },

  // Mixed codebase issues
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/no-types': ['error'],
      },
    },
  ],
};
