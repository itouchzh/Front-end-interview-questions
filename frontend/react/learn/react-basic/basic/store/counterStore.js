import {makeAutoObservable} from 'mobx'

class CounterStore {
    count = 0
    constructor(){
        // 响应式处理
        makeAutoObservable(this)  
    }
    addCount = () => {
        this.count++
    }
}

const counter = new CounterStore()
export default counter