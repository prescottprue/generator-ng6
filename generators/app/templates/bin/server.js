const serve = require('browser-sync')
const webpackDevMiddelware = require('webpack-dev-middleware')
const webpack = require('webpack')
const path = require('path')

const root = 'src'

// helper method for resolving paths
const resolveToApp = (glob) => {
  if (!glob) glob = ''
  return path.join(root, '..', 'app', glob) // app/{glob}
}

const resolveToComponents = (glob) => {
  if (!glob) glob = ''
  return path.join(root, '..', 'app/components', glob) // app/components/{glob}
}

// map of all paths
const paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(__dirname, '..', root, 'index.html')
  ],
  entry: path.join(__dirname, '..', root, 'app/app.js'),
  output: root
}

const config = require('../webpack.dev.config')

config.entry.app = [
  // this modules required to make HRM working
  // it responsible for all this webpack magic
  // 'webpack-hot-middleware/client?reload=true',
  // application entry point
  paths.entry
]

const compiler = webpack(config)

serve({
  port: process.env.PORT || 9103,
  open: false,
  server: { baseDir: root },
  middleware: [
    webpackDevMiddelware(compiler, {
      stats: {
        colors: true,
        chunks: false,
        modules: false
      },
      publicPath: config.output.publicPath
    })
  ]
})
