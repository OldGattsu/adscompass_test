module.exports = {
  cache: true,
  ssr: false,

  /*
  ** Headers of the page
  */
  head: {
    title: 'test-task',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Project for test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /* 
  ** Modules are only required during development and build time
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],

  /* 
  ** Helps to make production startup faster and also significantly decreasing node_modules size for production deployments
  */
  buildModules: [
    ['@nuxtjs/vuetify']
  ],

  vuetify: {
    treeShake: true,
    theme: {       
      dark: true,
        themes: {
          dark: {  
            'link': '#ffffff',
          },    
          light: {  
            'link': '#212121',
          }
        }
      }
  },

  css: [
    '~assets/style/main.sass'
  ],
  styleResources: {
    scss: ['./assets/style/*.sass']
  },

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
        }),
        config.module.rules.push({
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        })
      }
    }
  }
}

