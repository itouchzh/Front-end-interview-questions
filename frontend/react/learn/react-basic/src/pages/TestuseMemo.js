import React, { useEffect, useMemo, useState } from 'react'

export default function School() {
    const [number, setNumber] = useState(0)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    const dirtyWork = () => {
        console.log('large work')
        return number
    }
    // 只有当number改变的时候，才会触发函数
    const result = useMemo(() => {
        return dirtyWork()
    }, [number])

    return (
        <>
            <h1>useMemo</h1>
            <h1>{time.getSeconds()}</h1>
            <input
                type="text"
                value={number}
                onChange={(e) => {
                    setNumber(e.target.value)
                }}
            ></input>
            <h2>{result}</h2>
        </>
    )
}
