const configurations = require('./karma.common')

module.exports = function (config) {
    configurations.reporters.push('coverage')
    configurations.browsers = [ 'Chrome' ]
    configurations.preprocessors = {
      'src/**/*.js': ['coverage']
    }
    configurations.coverageReporter = {
      type : 'lcov',
      dir : 'coverage/',
      file: 'lcov.info'
    }
    configurations.plugins.push('karma-chrome-launcher')
    configurations.plugins.push('karma-coverage')
    config.set(configurations)
}
