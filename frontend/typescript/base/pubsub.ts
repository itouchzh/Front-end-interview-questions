// ts实现发布订阅模式
interface EventFace {
    on: (name: string, callback: Function) => void
    emit: (name: string, ...args: Array<any>) => void
    off: (name: string, fn: Function) => void
    once: (name: string, fn: Function) => void
}
interface List {
    // 事件名字，值为函数数组
    [key: string]: Array<Function>
}
class Dispatch implements EventFace {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: string, callback: Function) {
        const callbackList: Array<Function> = this.list[name] || []
        callbackList.push(callback)
        this.list[name] = callbackList
    }
    emit(name: string, ...args: Array<any>) {
        let eventName = this.list[name]
        if (eventName) {
            eventName.forEach((fn) => {
                fn.apply(this, args)
            })
        } else {
            console.log('该事件未被监听')
        }
    }
    // 卸载事件
    off(name: string, fn: Function) {
        let eventName = this.list[name]
        if (eventName && fn) {
            let index = eventName.findIndex((fns) => fns === fn)
            // 根据索引删除事件
            eventName.splice(index, 1)
        } else {
            console.log('该事件未被监听')
        }
    }
    once(name: string, fn: Function) {
        let decor = (...args: Array<any>) => {
            fn.apply(this, args)
            this.off(name, decor)
        }
        this.on(name, decor)
    }
}

const dispatch = new Dispatch()
// 使用
dispatch.on('click', (...args: Array<any>) => {
    console.log(args)
})

dispatch.emit('click', 1, 2, 3)
