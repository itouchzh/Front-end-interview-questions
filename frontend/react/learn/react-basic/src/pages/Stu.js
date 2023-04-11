import React, { useEffect, useState, useReducer, useMemo } from 'react'
// import testContext from '../store/testContext'

const countReducer = (value, action) => {
    console.log(value, action)
    if (action.type === 'add') {
        return value + 1
    } else {
        return value - 1
    }
}

const sum = (a, b) => {
    return a + b
}
const Student = function () {
    // const ctx = useContext(testContext)
    const [name, setName] = useState('paul')
    // useEffect 用于清除副作用
    // const a = 10
    // useEffect(() => {
    //     console.log(a)
    //     setName('timi')
    // }, [a])
    const changeName = () => {
        setName(() => {
            return 'timi'
        })
    }

    // useReducer
    // useReducer(reducer(), initArg, init)
    // countDispatch 派发器主要用来派活，派给reducer(),reducer()来操作值的改变
    // reducer接收两个参数，第一个为当前最新的count值，第二个为操作方法
    const [count, countDispatch] = useReducer(countReducer, 0)
    const addCount = () => {
        countDispatch({ type: 'minus' })
    }

    // useMemo() 用来存储函数的执行结果
    const testUseMemo = useMemo(() => {
        return sum(123, 456)
    }, [])
    return (
        <>
            <div>Hello React!</div>
            {/* 使用Context,跨组件传参 */}
            {/* <testContext.Consumer>
                {(ctx) => {
                    return ctx.name
                }}
            </testContext.Consumer> */}

            {/* <div>{ctx.name}</div> */}

            {name}
            <button onClick={changeName}> 改名</button>

            <div>当前的count 为----{count}</div>
            <button onClick={addCount}>+</button>
        </>
    )
}
export default Student
