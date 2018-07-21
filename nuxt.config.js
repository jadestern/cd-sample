module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '테라펀딩 대출자',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '테라펀딩 대출자 플랫폼' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#448aff' },
  /*
  ** Router
  */
  router: {
    middleware: 'auth',
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.css',
    // { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    // { src: '~/assets/theme.scss', lang: 'scss' }, // include vue-material theme engine
  ],
  plugins: [
    // { src: '~/plugins/vue-material' },
    { src: '~/plugins/nossr' },
  ],
  /*
  ** Transition
  */
  // transition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   beforeEnger(el) {
  //     console.log('Before Enter transition...');
  //   },
  // },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'lodash'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
