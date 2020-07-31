import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

const siteName = process.env.NUXT_ENV_SITE_NAME
const siteUrl = process.env.NUXT_ENV_SITE_URL
const siteDesc = process.env.NUXT_ENV_SITE_DESC
const siteKeywords = process.env.NUXT_ENV_SITE_KEYWORDS
const analyticsId = process.env.NUXT_ENV_ANALYTICS_ID

export default {
  env: {
    siteName: siteName,
    topTitle: process.env.NUXT_ENV_TOP_TITLE,
    topTemplate: process.env.NUXT_ENV_TOP_TEMPLATE,
    colorBtnBg: process.env.NUXT_ENV_COLOR_BTN_BG,
    colorBtnTxt: process.env.NUXT_ENV_COLOR_BTN_TXT,
    colorContactInput: process.env.NUXT_ENV_COLOR_CONTACT_INPUT,
    contactSelections: process.env.NUXT_ENV_CONTACT_SELECTIONS,
    contactComboLabel: process.env.NUXT_ENV_CONTACT_COMBO_LABEL,
    contactComboItems: process.env.NUXT_ENV_CONTACT_COMBO_ITEMS,
    contactCorporateLabel: process.env.NUXT_ENV_CONTACT_CORPORATE_LABEL,
    contactNameLabel: process.env.NUXT_ENV_CONTACT_NAME_LABEL,
    contactEmailLabel: process.env.NUXT_ENV_CONTACT_EMAIL_LABEL,
    contactContentLabel: process.env.NUXT_ENV_CONTACT_CONTENT_LABEL
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
    titleTemplate: `%s - ${siteName}`,
    meta: [
      // 設定関連
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      
      // ogp関連
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: siteUrl },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDesc },
      { hid: 'og:image', property: 'og:image', content: `${siteUrl}ogp/home.jpg` },
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
    id: analyticsId
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: siteUrl,
    gzip: true
  },
  manifest: {
    title: siteName,
    'og:title': siteName,
    description: siteDesc,
    'og:description': siteDesc,
    lang: 'ja',
    theme_color: process.env.NUXT_ENV_COLOR_BTN_BG,
    "start_url": "/"
  },
  icon: {
    iconFileName: '/icon.png'
  }
}
