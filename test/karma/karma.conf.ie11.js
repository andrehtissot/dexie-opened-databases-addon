const configurations = require('./karma.common')

module.exports = (config) => {
    configurations.browsers = ['IE']
    configurations.plugins.push('karma-ie-launcher')
    configurations.files.push('dist/DexieOpenedDatabasesAddon.js')
    configurations.files.push('test/tmp/tests.js')
    config.set(configurations)
}
