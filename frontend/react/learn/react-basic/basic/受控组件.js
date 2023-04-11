import React from 'react'
// 受控组件
class Counter extends React.Component {
    state = {
        message: 'this is message',
    }

    changeHandler = (e) => {
        this.setState({
            message: e.target.value,
        })
    }
    render() {
        return (
            <>
                <input value={this.state.message} onChange={this.changeHandler}></input>
            </>
        )
    }
}
function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    )
}

export default App
