'use strict'
var yeoman = require('yeoman-generator')
var yosay = require('yosay')
var chalk = require('chalk')

module.exports = yeoman.generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    yeoman.Base.apply(this, arguments)
  },
  // ask app name
  prompting: function () {
    var done = this.async()
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('Ng6s') + ' generator!'
    ))

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name ?',
        default: this.appname,
        store: true
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'Your is your Github Username ?',
        default: 'prescottprue',
        store: true
      }
    ]
    this.props = ''
    this.prompt(prompts, function (props) {
      this.props = props
      this.config.set({ 'app_name': props.name })
      done()
    }.bind(this))
  },

  writing: {
    app: function () {
      this.template(
        this.sourceRoot(),
        this.destinationRoot(),
        this.templateContext()
      )
    }
  },

  install: function () {
    this.npmInstall()
  }

})
