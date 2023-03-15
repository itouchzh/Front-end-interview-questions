import React from 'react'
// 定义函数组件
function FirstFn() {
    const clickHandler = (e) => {
        console.log('事件被触发了', e)
    }
    return (
        <>
            <button onClick = {clickHandler}>点我</button>
        </>
    )
}
// 函数组件在调用函数的时候传参，采用()=> fn(value1, value2)
function SecondFn(){
  const clickHandler1 = (e, value) => {
    console.log(e, value)
  }
  return (
    <>
        <button onClick = {(e) => clickHandler1(e, 1)}>点我传参</button>
    </>
)
}
// 类组件
class HelloC extends React.Component {
    render() {
        return <div> This is my first class component</div>
    }
}

// 类组件的事件绑定，借助this
class HelloB extends React.Component{
  
  render(h) {
    return (<></>)
  }
}
function App() {
    return (
        <div className="App">
            <FirstFn></FirstFn>
            <HelloC></HelloC>
            <SecondFn></SecondFn>
        </div>
    )
}

export default App
