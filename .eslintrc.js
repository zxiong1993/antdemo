module.exports = {
  // https://github.com/feross/standard/blob/master/RULES.md
  extends: [
    'standard',
    'standard-react'
  ],
  parser: "babel-eslint",
  rules: {
    'arrow-parens': 0,
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }]
  }
}