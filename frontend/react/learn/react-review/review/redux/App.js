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
    // 在这里指定student
    const student = useSelector((state) => state.student.value)
    const school = useSelector(state => state.school)
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
            <span>{student}</span>
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
            >
                -
            </button>
            <hr></hr>
            <div>{school.address}-----{school.age}</div>
        </div>
    )
}

export default App
