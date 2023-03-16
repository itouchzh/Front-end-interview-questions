const WebSocketServer = require('websocket').server

const http = require('http')

const server = http.createServer()

server.listen(8080, function () {
    console.log((new Date()) + "已经开始监听8080")
})

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
})

// 跨域允许
function originIsAllowed(origin) {
    return true
}
// 监听请求
// 建立聊天转发
let connectionArr = []
wsServer.on('request', function (req) {
    console.log(req)
    const connection = req.accept()
    connectionArr.push(connection)
    connection.on("message", function (msg) {
        for (let i = 0; i < connectionArr.length; i++){
            connectionArr[i].send(msg.utf8Data)
        }
        console.log(msg);
        // connection.send(msg)
    })
})