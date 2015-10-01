'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var gen ={};

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    gen = this;
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('Ng6') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name ?',
      default : this.appname,
      store   : true
    }];

    this.prompt(prompts, function (props) {
      // this.props = props;
      // To access props later use this.props.someOption;
      done();
    },function (answers) {
      this.config.set({ 'app_name': answers.name});
      this.log(this.config);
      done();
    }.bind(this));


  },

  writing: {
    app: function () {
      console.log(gen.config.get("app_name"));
      this.fs.copy(
        this.sourceRoot(),
        gen.config.get("app_name")+'/'+this.destinationRoot()
      );
    },

    projectfiles: function () {
      /*this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );*/
    }
  },

  install: function () {
    this.npmInstall();
  },
});
