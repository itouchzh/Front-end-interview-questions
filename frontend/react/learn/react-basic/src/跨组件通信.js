import React, { createContext } from 'react'
// 跨组件通信Context
// 1. 创建Context对象, 提供者和消费者
const { Provider, Consumer } = createContext()

//3.消费数据
function ComC() {
    return <Consumer>{(value) => <div>{value}</div>}</Consumer>
}
function ComA() {
    return <ComC></ComC>
}
// 2. 提供
class App extends React.Component {
    state = {
        message: 'this is message',
    }
    // 当函数被调用后，收到子组件传递过来的实参，从而改变信息
    changeMessage = (newMsg) => {
        console.log('子组件传过来的数据', newMsg)
        this.setState({
            message: newMsg,
        })
    }
    render() {
        return (
            // 要提供的数据
            <Provider value={this.state.message}>
                <div className="app">
                    <ComA></ComA>
                </div>
            </Provider>
        )
    }
}

export default App
