exports.config =

  minMimosaVersion:'2.0.0'

  modules: [
    'server'
    'require'
    'minify-js'
    'minify-css'
    'live-reload'
    'jshint'
    'csslint'
    'combine'
    'requirebuild-include'
    'requirebuild-textplugin-include'
    'bower'
    'web-package'
    'copy'
  ]

  watch:
    javascriptDir: 'app'
    javascriptDir: 'lib'

  server:
    path: "server.js"
    views:
      compileWith: 'handlebars'
      extension: 'hbs'

  require:
    optimize:
      overrides:
        name: '../vendor/almond-custom'
        inlineText: true
        stubModules: ['text']
        pragmas:
          build: true