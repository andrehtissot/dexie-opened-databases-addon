const configurations = require('./karma.common')

module.exports = function (config) {
    configurations.reporters.push('coverage')
    configurations.browsers = [ 'Chrome' ]
    configurations.preprocessors = {
      'dist/*.js': ['coverage']
    }
    configurations.coverageReporter = {
      type: 'lcovonly',
      dir: 'coverage/',
      subdir: './'
    }
    configurations.plugins.push('karma-chrome-launcher')
    configurations.plugins.push('karma-coverage')
    config.set(configurations)
}
