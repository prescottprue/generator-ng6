var
  browserSync = require('browser-sync');
var root = 'src';

require('chokidar-socket-emitter')({
  port: 8081,
  path: root,
  relativeTo: root
});

// server file throught browserSync
browserSync({
  server: {
    baseDir: root,
    routes: {
      '/jspm.config.js': './jspm.config.js',
      '/jspm_packages': './jspm_packages'
    }
  }
});
