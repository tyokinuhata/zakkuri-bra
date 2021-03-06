module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ざっくりBRA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Oppai boin boin' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/zakkuri-bra/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: '/zakkuri-bra/'
  },
  modules: [
    'bootstrap-vue/nuxt',
  ]
}
