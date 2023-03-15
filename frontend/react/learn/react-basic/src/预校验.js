import React, { createContext } from 'react'
import PropTypes from 'prop-types'
// props校验

//3.消费数据
function ComC(props) {
    return (
        <div>
            {props.list.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    )
}
ComC.propTypes = {
    list: PropTypes.array,
}
class App extends React.Component {
    state = {
        message: 'this is message',
    }
    changeMessage = (newMsg) => {
        console.log('子组件传过来的数据', newMsg)
        this.setState({
            message: newMsg,
        })
    }
    render() {
        return (
            <div className="app">
                <ComC list={[1, 2, 3, 4, 5]}></ComC>
            </div>
        )
    }
}

export default App
