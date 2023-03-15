// mobx
// 导入counterStore
import { useStore } from './store1/index'
import { observer } from 'mobx-react-lite'
function App() {
    const store = useStore()
    console.log(store)
    return (
        <div className="App">
            <button onClick={() => store.counter.addCount()}>{store.counter.count}</button>
        </div>
    )
}
export default observer(App)
