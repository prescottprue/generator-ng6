'use strict'

var fs = require('fs')
var path = require('path')
var config = require(path.resolve(__dirname, '..', 'config.json'))
var indexPath = path.resolve(__dirname, '..', 'src/index.html')
var indexMarkup = fs.readFileSync(indexPath).toString()

function renderIndex () {
  return indexMarkup
    .replace('<!-- app -->', appMarkup)
    .replace('<!-- app-data -->', appData)
    .replace(
      '<!-- script -->',
      '<script src="/assets/bundle.js"></script>'
    .replace('<!-- analytics -->',
      '<!-- Google Analytics -->' +
      `<script>\n` +
        `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\n` +
        `ga('create', '${config.gaTrackingId}', 'auto');\n` +
        `ga('send', 'pageview');\n` +
      `</script>\n` +
      `<script async src='//www.google-analytics.com/analytics.js'></script>\n` +
      '<!-- End Google Analytics -->\n'
    )
}

module.exports = renderIndex
