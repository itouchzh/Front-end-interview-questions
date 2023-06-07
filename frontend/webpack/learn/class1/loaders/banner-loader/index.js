const schema = require('./schema.json')

module.exports = function (content) {
    const options = this.getOptions(schema)
    console.log(options.author);
    console.log(content);
    const prefix = `
    /*
    *   Author: ${options.author}
    */
    `
    return prefix + content
}