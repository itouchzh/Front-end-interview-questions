const http = require('http')

// 创建对象
const server = http.createServer((req, res) => {
    // console.log(req)
    let { url, method } = req
    console.log(url, method)
    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    if (url == '/register' && method === 'GET') {
        // 响应体
        res.end('注册页面')
    } else if (url == '/login' && method === 'GET') {
        res.end('登录页面')
    } else {
        res.end('<h1>404 Not Found</h1>')
    }
})

// 监听端口
server.listen(3000, () => {
    console.log('3000端口正在监听中')
})
