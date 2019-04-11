// eslint-disable-next-line import/no-commonjs
module.exports = {
  rules: {
    // Possible errors
    // http://eslint.org/docs/rules/#possible-errors
    'no-cond-assign': ['error'],
    'no-console': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': ['error'],
    'no-extra-semi': ['error'],
    'no-func-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['off'],
    'no-regex-spaces': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['error'],
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
    'dot-location': ['off'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'guard-for-in': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-div-regex': ['error'],
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
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['error'],
    'no-with': ['error'],
    'prefer-promise-reject-errors': ['error'],
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
    'no-unused-vars': ['off'], // Superset by @typescript-eslint/no-unused-vars
    'no-use-before-define': ['off'], // Superset by @typescript-eslint/no-use-before-define

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
    camelcase: ['off'], // Superset by @typescript-eslint/camelcase
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
    'no-array-constructor': ['off'], // Superset by @typescript-eslint/no-array-constructor
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
    'no-useless-constructor': ['off'], // Superset by @typescript-eslint/no-useless-constructor
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

    // Import
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-amd': ['error'],
    'import/no-commonjs': ['error'],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-duplicates': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],

    // Prettier
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
};
