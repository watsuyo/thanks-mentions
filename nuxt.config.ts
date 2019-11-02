import { environments } from './src/plugins/environments'

if (!process.env.CI) {
  Object.entries(environments).forEach(([key, value]) => {
    if ([
      'browser',
      'client',
      'mode',
      'modern',
      'server',
      'static',
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_PROJECT_ID',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGING_SENDER_ID',
      'FIREBASE_APP_ID'
    ].includes(key)) {
      return
    }
  })
}

const config = {
  srcDir: 'src',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/firebase.ts'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],

  env: {
    FIREBASE_API_KEY:'AIzaSyDjAcOjZ2HzwaObknB22eJTAOw54VgVl_Q',
    FIREBASE_AUTH_DOMAIN:'thanks-mentions.firebaseapp.com',
    FIREBASE_DATABASE_URL:'https://thanks-mentions.firebaseio.com',
    FIREBASE_PROJECT_ID:'thanks-mentions',
    FIREBASE_STORAGE_BUCKET:'thanks-mentions.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID:'406710490580',
    FIREBASE_APP_ID:'1:406710490580:web:3c8565f09062b351977241'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** Build configuration
   */

  build: {
  },

  pwa: {
    manifest: {
      name: 'thanks-mentions',
      short_name:'thanks-mentions',
      lang: 'ja',
      start_url: '/',
      display: 'standalone',
      icons: [{
        src: 'src/static/icon.png',
        sizes: '144*144',
        type: 'image/png'
      }],
      share_target: {
        action: "/share",
        params: {
          title: "name",
          text: "description",
          url: "link"
        }
  }
    }
  }
}

export default config
