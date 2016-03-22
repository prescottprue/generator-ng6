var yeomen = require('yeoman-generator')
var path = require('path')
var changeCase = require('change-case')

module.exports = yeomen.NamedBase.extend({
  constructor: function () {
    yeomen.NamedBase.apply(this, arguments)
    this.name = changeCase.camelCase(this.name)
  },
  promptName: function () {
    var done = this.async()

    var prompts = [
      {
        type: 'input',
        name: 'parent',
        message: 'Enter path (relative to src/app)?',
        default: 'components'
      }
    ]

    this.prompt(prompts, props => {
      this.parent = props.parent
      done()
    })
  },

  copy: function () {
    const appPath = 'src/app'

    const files = [
      '.component.js',
      '.controller.js',
      '.css',
      '.html', '.js', '.spec.js'
    ]

    files.forEach(file => {
      this.fs.copyTpl(
       this.templatePath(file),
       this.destinationPath(path.join(appPath, this.parent, this.name, this.name + file)),
        {
          name: this.name,
          pascalCase: changeCase.pascalCase(this.name),
          camelCase: changeCase.camelCase(this.name)
        }
     )
    })
  }
})
