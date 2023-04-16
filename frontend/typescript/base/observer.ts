// 设计模式

// const list: Set<Function> = new Set()

// const autorun = (cb: Function) => {
//     if (cb) {
//         list.add(cb)
//     }
// }

// const observable = <T extends object>(params: T) => {
//     return new Proxy(params, {
//         set(target, key, value, receiver) {
//             const result = Reflect.set(target, key, value, receiver)
//             list.forEach((fn) => fn())
//             console.log(list)
//             return result
//         },
//     })
// }

// const aperson = observable({ name: '小满', attr: '威猛先生' })
// // 执行了autorun()函数，所以list里面有函数了，如果数据变了，list里面的函数就会执行
// autorun(() => {
//     console.log('我变化了')
// })

// aperson.attr = '威猛个捶捶'



// Vue的响应式原理

