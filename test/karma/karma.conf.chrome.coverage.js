const configurations = require('./karma.common')

module.exports = function (config) {
    configurations.reporters.push('coverage')
    configurations.browsers = [ 'Chrome' ]
    configurations.preprocessors = {
      'src/**/*.js': ['coverage']
    }
    configurations.coverageReporter = {
      type : 'html',
      dir : 'coverage/'
    }
    configurations.plugins.push('karma-chrome-launcher')
    config.set(configurations)
}
