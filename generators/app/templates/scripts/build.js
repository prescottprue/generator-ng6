var fs = require('fs')
var useref = require('node-useref')

// update app.min.js link
var index = fs.readFileSync('src/index.html')
var result = useref(index.toString())
fs.writeFile('dist/index.html', result[0])
