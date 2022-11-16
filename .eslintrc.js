module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-stronly-recommended', //Lv2
    // 'plugin:vue/vue3-recommended', //Lv 3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    
  }
}