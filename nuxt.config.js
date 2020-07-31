import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

const {SITE_NAME, SITE_URL, SITE_DESC, SITE_KEYWORDS, TOP_TITLE, TOP_TEMPLATE, ANALYTICS_ID, COLOR_BTN_BG, COLOR_BTN_TXT, COLOR_CONTACT_INPUT, CONTACT_SELECTIONS, CONTACT_COMBO_LABEL, CONTACT_COMBO_ITEMS, CONTACT_CORPORATE_LABEL, CONTACT_NAME_LABEL, CONTACT_EMAIL_LABEL, CONTACT_CONTENT_LABEL} = process.env

export default {
  env: {
    SITE_NAME,
    TOP_TITLE,
    TOP_TEMPLATE,
    ANALYTICS_ID,
    COLOR_BTN_BG,
    COLOR_BTN_TXT,
    COLOR_CONTACT_INPUT,
    CONTACT_SELECTIONS,
    CONTACT_COMBO_LABEL,
    CONTACT_COMBO_ITEMS,
    CONTACT_CORPORATE_LABEL,
    CONTACT_NAME_LABEL,
    CONTACT_EMAIL_LABEL,
    CONTACT_CONTENT_LABEL
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    titleTemplate: `%s - ${SITE_NAME}`,
    meta: [
      // 設定関連
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
      // SEO関連
      { hid: 'description', name: 'description', content: SITE_DESC },
      { hid: 'keywords', name: 'keywords', content: SITE_KEYWORDS },
      
      // ogp関連
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: SITE_URL },
      { hid: 'og:title', property: 'og:title', content: SITE_NAME },
      { hid: 'og:description', property: 'og:description', content: SITE_DESC },
      { hid: 'og:image', property: 'og:image', content: `${SITE_URL}ogp/home.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
      // apple touch icon
      { rel: 'apple-touch-icon', type: 'image/png', href: '/icon.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~~/font/dist/css/materialdesignicons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  googleAnalytics: {
    id: ANALYTICS_ID
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: SITE_URL,
    gzip: true
  }
}
