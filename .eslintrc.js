module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {},
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'vue/html-self-closing': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'vue/no-async-in-computed-properties': 0,
    'arrow-parens': 0,
    'vue/return-in-computed-property': 0,
    'vue/no-side-effects-in-computed-properties': 0
  }
}
