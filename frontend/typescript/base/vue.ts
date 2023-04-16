type VueOpt = {
    // Record<T, K> 键为T值为K的类型
    data: Record<any, any>
}
function cb(v: any) {
    console.log('update')
}

class Vue {
    _data: Record<any, any>
    constructor(opt: VueOpt) {
        this._data = opt.data
        this.observer(this._data)
    }
    // observer 模式
    observer(data: Record<any, any>) {
        if (!data || typeof data !== 'object') return
        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key])
        })
    }

    // 转换为Ojbect.defineProperty
    defineReactive(data: Record<any, any>, key: string, value: any) {
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get() {
                return value
            },
            set(v) {
                if (v === data[key]) return
                value = v
                cb(v)
            },
        })
    }
}
const vue = new Vue({
    data: {
        test: '测试',
    },
})
vue._data.test = '123'
console.log(vue._data.test)
