const { Server } = require('socket.io')
const { createServer } = require('http')
const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
})
io.on('connection', (socket) => {
    socket.on('sendMsg', (arg) => {
        console.log('客户端发过来的数据', arg)
        // 谁发的就返回给谁用socket
        socket.emit('sendAllMsg', arg)
        // 广播出去让所有人都收到，用io
        io.emit('sendAllMsg', arg)
    })
})

httpServer.listen(3000, function () {
    console.log('正在监听。。。。。。')
})
