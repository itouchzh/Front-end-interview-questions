// redux
import { useSelector, useDispatch } from 'react-redux'
import {add} from './store2/modules/counterStore'
function App() {
    const { count } = useSelector((state) => state.counterStore)
    // 修改数据
    const dispatch = useDispatch()
    const clickHandler = () => {
        const action = add()
        dispatch(action)
    }
    return (
        <div className="App">
            <div>test github</div>
            {count}
            <button onClick={clickHandler}>+</button>
        </div>
    )
}

export default App
