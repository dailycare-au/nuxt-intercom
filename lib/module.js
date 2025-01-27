import path from 'path'
import defaults from './defaults'

module.exports = function intercomModule (_options) {
  const options = {
    ...defaults,
    ..._options,
    ...this.options.intercom
  }

  this.addTemplate({
    src: path.resolve(__dirname, 'Intercom.js'),
    fileName: 'nuxt-intercom/Intercom.js',
    options
  })

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-intercom/intercom-plugin.js',
    options,
    template: {
      ssr: false // @todo Support SSR to allow intercom functions called on server to be queued to run on client on load
    }
  })
}

module.exports.meta = require('../package.json')
