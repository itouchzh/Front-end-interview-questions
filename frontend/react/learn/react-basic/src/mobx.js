// mobx
// 导入counterStore
import counter from './store/counterStore'
import { observer } from 'mobx-react-lite'
function App() {
    return (
        <div className="App">
            <button onClick={() => counter.addCount()}>{counter.count}</button>
        </div>
    )
}
export default observer(App)
