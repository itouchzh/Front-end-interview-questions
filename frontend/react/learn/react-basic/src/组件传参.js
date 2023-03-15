// // 组件之间的通信，父传子，兄弟
// import React from 'react'
// // 函数组件
// function FSon(props) {
//     console.log(props)
//     return <div>{props.giveu}</div>
// }

// // 类组件
// class CSon extends React.Component {
//     render() {
// 		console.log(this.props.msg)
//         return <div>{this.props.msg}</div>
//     }
// }

// function App() {
//     const msg = 'Hello world'
//     return (
//         <div className="App">
//             <FSon giveu={msg} />
//             <CSon giveu={msg}></CSon>
//         </div>
//     )
// }

// export default App

// 子传父
import { func } from 'prop-types'
import React from 'react'
// 函数组件
function FSon(props) {
    function handleClick() {
		// 触发父组件传递过来的函数，将需要传递的信息用参数传过去
        props.changeMsg('this is my son')
    }
    return (
        <div>
            {props.giveu}
            <button onClick={handleClick}>change</button>
        </div>
    )
}

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
            <div className="App">
                <FSon giveu={this.state.message} changeMsg={this.changeMessage} />
            </div>
        )
    }
}

export default App
