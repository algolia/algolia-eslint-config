module.exports = {
  "parser": "babel-eslint",
  "extends": "./es5",
  "plugins": ["react"],
  "ecmaFeatures": {
    // eslint-config-algolia disables modules because all projects are not ES6
    "modules": true
  },
  "rules": {
    "strict": [2, "never"], // babel inserts "use strict"; for us
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-closing-bracket-location": 2
  }
}
