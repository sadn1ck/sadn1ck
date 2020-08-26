export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-IN'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '"https://fonts.googleapis.com/css2?family=Inter:wght@200;500;800&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazyload.js',
    '~/plugins/vst.js'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /-fa$/, /^fa-/]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 500 }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
