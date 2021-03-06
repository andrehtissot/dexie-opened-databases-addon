const configurations = require('./karma.common')

module.exports = (config) => {
    configurations.browsers = ['Firefox']
    configurations.plugins.push('karma-firefox-launcher')
    configurations.files.push('dist/DexieOpenedDatabasesAddon.js')
    configurations.files.push('test/tmp/tests.js')
    config.set(configurations)
}
