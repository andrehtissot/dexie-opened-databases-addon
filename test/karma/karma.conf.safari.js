const configurations = require('./karma.common');

module.exports = function (config) {
    configurations.browsers = [ 'Safari' ]
    configurations.plugins.push('karma-safari-launcher')
    config.set(configurations)
}
