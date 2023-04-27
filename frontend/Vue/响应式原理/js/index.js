function defineReactive(data, key, val) {
    // 判断val的值
    val = val || data[key]
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`你正在访问${data}中的${key}属性`, key)
            return val
        },
        set(newValue) {
            if (val !== newValue) {
                val = newValue
            }
        },
    })
}
var obj = {}

defineReactive(obj, 'age', 10)
console.log(obj.age)
obj.age = 20
