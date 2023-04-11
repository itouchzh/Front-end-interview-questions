import { makeAutoObservable } from 'mobx'
class CounterStore {
    constructor() {
        makeAutoObservable(this)
    }
    count = 0
    list = [1, 2, 3, 4, 5]
    addCount = () => {
        this.count++
    }
    changeList = () => {
        this.list.push(7, 8, 9)
    }

    get filterList() {
        return this.list.filter((item) => item > 3)
    }
}

const counter = new CounterStore()
export default counter
