// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true
    },
    extends: ['standard', 'standard-react'],
    // add your custom rules here
    'rules': {
      'no-unused-expressions': 0,
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        'js': 'never'
      }],
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }
  