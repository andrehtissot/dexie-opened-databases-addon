const configurations = require('./karma.common')

module.exports = function (config) {
    configurations.reporters.push('coverage')
    configurations.browsers = [ 'Chrome' ]
    configurations.preprocessors = {
      'src/**/*.js': ['coverage']
    }
    configurations.coverageReporter = {
      type : 'lcov',
      dir : 'coverage/'
    }
    configurations.plugins.push('karma-chrome-launcher')
    configurations.plugins.push('karma-coverage')
    config.set(configurations)
}
