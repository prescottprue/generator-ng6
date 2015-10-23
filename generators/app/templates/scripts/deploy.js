// or more concisely
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
  console.log(stdout);
}
console.log("Pushing compiled files to gh-pages");
exec("git add dist/",puts);
exec("git commit -m 'Push dist subtree'",puts);
exec("git subtree push --prefix dist origin gh-pages",puts);
exec("git rm -rf dist/");
exec("rm -rf dist/");
