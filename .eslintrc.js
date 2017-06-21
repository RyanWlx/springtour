// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-tabs":"off",
    'indent':"off",
    'eol-last':'off',
    'key-spacing':'off',
    'space-before-function-paren':'false',
    'space-before-blocks':'false',
    'no-mined-spaces-and-tabs':'false',
    'arrow-parens': 0,
    'eslint-disable-next-line':'false',
    'generator-star-spacing': 0,
    
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
