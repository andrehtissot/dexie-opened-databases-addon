const configurations = require('./karma.common')

module.exports = (config) => {
    configurations.browsers = ['IE']
    configurations.plugins.push('karma-ie-launcher')
    configurations.files.push('dist/DexieOpenedDatabasesAddon.ie11up.js')
    configurations.files.push('test/tmp/tests.ie11up.js')
    config.set(configurations)
}
