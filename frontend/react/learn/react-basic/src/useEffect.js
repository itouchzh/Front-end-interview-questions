// 函数组件：hook

import { useState, useEffect } from 'react'
import { useWindowScroll } from './hooks/useWindowScroll'
function App() {
    const [count, setCount] = useState(0)
    const [y] = useWindowScroll()
    useEffect(() => {
        console.log(count)
    }, [count])
    return (
        <>
            <div style={{ height: '1200px' }}>
                <button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    {count}
                </button>
                <div>{y}</div>
            </div>
        </>
    )
}
export default App
