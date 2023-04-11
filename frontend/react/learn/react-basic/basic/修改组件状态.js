import React from 'react'

class Counter extends React.Component {
    state = {
        count: 0,
    }
    add = () => {
        this.setState({
            count: this.state.count+1,
        })
    }
    render() {
        return (
            <>
                <button onClick={this.add}>+1</button>
                <div>{this.state.count}</div>
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
