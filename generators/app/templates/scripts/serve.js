var
  browserSync = require('browser-sync');
// server file throught browserSync
browserSync({
  server: {
  baseDir: 'src',
  routes: {
    '/jspm.config.js': './jspm.config.js',
    '/jspm_packages': './jspm_packages'
    }
  },
  files: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js']
});
