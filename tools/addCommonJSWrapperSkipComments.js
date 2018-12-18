const fs = require('fs'),
    files = process.argv.slice(2)

const ignoreComment = '/* istanbul ignore next */\n'

const referenceText = 'if (typeof define === "function" && define.amd) {'

files.forEach(file => {
    let fileContent = fs.readFileSync(file, 'utf-8')
    fileContent = fileContent.replace(referenceText, ignoreComment + referenceText)
    fs.writeFileSync(file, fileContent, 'utf-8')
})
