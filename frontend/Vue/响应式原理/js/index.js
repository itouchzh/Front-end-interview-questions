// // 更新视图
// const updateComponent = (data) => {
//     // 这里直接将data里的 键和值 拼接，当做html进行渲染
//     // 仅做演示，实际上的更新流程复杂得多。
//     console.log(data);
//     let html = ''
//     Object.entries(data).forEach(([key, value]) => {
//         html += `${key}: ${value} <br/>`
//     })
//     const $app = document.querySelector('#app')
//     $app.innerHTML = html
// }

// function defineReactive(data, key, val) {
//     // 判断val的值
//     val = val || data[key]
//     Object.defineProperty(data, key, {
//         enumerable: true,
//         configurable: true,
//         get() {
//             console.log(`你正在访问${data}中的${key}属性`, key)
//             return val
//         },
//         set(newValue) {
//             if (val !== newValue) {
//                 val = newValue
//             }
//             updateComponent(data)
//         },
//     })
// }
// let obj = {}

// defineReactive(obj, 'age', 10)
// console.log(obj.age)
// obj.age = 20


