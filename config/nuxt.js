'use strict'

const resolve = require('path').resolve

module.exports = {
  head: {
    title: 'blog',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'blog project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  plugins: [
    '~/plugins/element-ui.js',
  ],
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname,'../resources/nuxt')
}