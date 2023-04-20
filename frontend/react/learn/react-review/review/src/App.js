import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/rtk/stuSlice'

function Son({ children, size = 90 }) {
    return (
        <>
            {children}---{size}
        </>
    )
}

function App() {
    // 使用
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <Son>
                <h1>Hello World</h1>
            </Son>
            <button
                onClick={() => {
                    dispatch(increment(10))
                }}
            >
                +
            </button>
            <span>{count}</span>
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
            >
                -
            </button>
        </div>
    )
}

export default App
