var yeomen = require('yeoman-generator')
var path = require('path')
var changeCase = require('change-case')

module.exports = yeomen.NamedBase.extend({
  constructor: function () {
    yeomen.NamedBase.apply(this, arguments)
    this.name = changeCase.paramCase(this.name)
  },
  promptName: function () {
    var done = this.async()

    var prompts = [
      {
        type: 'input',
        name: 'parent',
        message: 'Enter path (relative to components/)?',
        default: 'src/app/components'
      }
    ]

    this.prompt(prompts, function (props) {
      this.parent = props.parent
      done()
    }.bind(this))
  },

  copy: function () {
    const componentsPath = 'src/app/components'

    const files = [
      '.component.js',
      '.controller.js',
      '.css',
      '.html', '.js', '.spec.js'
    ]

    files.forEach((file) => {
      this.fs.copyTpl(
       this.templatePath(file),
       this.destinationPath(path.join(componentsPath, this.parent, this.name, this.name + file)),
        {
          name: this.name,
          pascalCase: changeCase.pascalCase(this.name),
          camelCase: changeCase.camelCase(this.name)
        }
     )
    })
  }
})
