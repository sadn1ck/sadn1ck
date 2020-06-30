const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {}

export default {
  ...routerBase,
  target: 'static',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/plugins/fontawesome.js',
    '~/plugins/lazyload.js'
  ],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDy5HHXhaPfx5C77UO5tlpnztl2T__F3rw',
          authDomain: 'my-website-a32fe.firebaseapp.com',
          databaseURL: 'https://my-website-a32fe.firebaseio.com',
          projectId: 'my-website-a32fe',
          storageBucket: 'my-website-a32fe.appspot.com',
          messagingSenderId: '243829419548',
          appId: '1:243829419548:web:19d878db371df01128f9d9',
          measurementId: 'G-HJCVM8P899'
        },
        services: {
          firestore: true
        }
      }
    ]
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
