// 清理js代码中的console.log 输出语句

module.exports = function cleanLogLoader(content) {
    return content.replace(/console\.log\(.*\);?/g, '')
}


