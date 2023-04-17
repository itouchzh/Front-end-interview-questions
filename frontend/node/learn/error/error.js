const http = require('http')

// 处理未被捕获的异常
process.on('uncaughtException', (err) => {
    console.log(err)
})
