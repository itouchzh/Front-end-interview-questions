module.exports = function (content) {
    return content
}

// //  同步loader

// module.exports = function (content, map, meta) {
//     this.callback(null, content, map, meta)
//     return
// }

// // 异步loader
// module.exports = function (content, map, meta) {
//     const callback = this.async()
//     // 异步操作
//     setTimeout(() => {
//         callback(null, content, map, meta)
//     }, 1000)
// }

//  raw loader 用来处理文件
// module.exports = function (content) {
//     return content
// }
// module.exports.raw = true

// pitch loader 优先执行
// module.exports = function (content) {
//     return content
// }
// module.exports.pitch = function (remainingRequest, precedingRequest, data) {
//     console.log('do');
// }