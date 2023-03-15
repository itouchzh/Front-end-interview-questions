// 深拷贝
// function deepCopy(ojb) {
//   if (typeof obj !== "object" || obj == null) {
//     return obj;
//   }
//   let res;
//   if (obj instanceof Array) {
//     res = [];
//   } else {
//     res = {};
//   }
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       res[key] = deepCopy(ojb[key]);
//     }
//   }
//   return res;
// }

// 数组的解构赋值和对象的解构赋值
// 数组：
// let [a, b] = [10, 20]
// // 对象
// let {name, age} = {
//   name:'paul',
//   age:23
// }
// console.log(name, age) // 'paul' 23

// 防抖
// function debounce(fn, delay) {
//     let t = null
//     return function () {
//         if (t !== null) {
//             clearTimeout(t)
//         }
//         t = setTimeout(() => {
//             fn.call(this)
//         }, delay)
//     }
// }
// 节流
// function throttle(fn, delay) {
//     let flag = true
//     return function () {
//         if (flag) {
//             setTimeout(() => {
//                 fn.call(this)
//                 flag = true
//             }, delay)
//         }
//         flag = false
//     }
// }
// 防抖：一个input输入框，每次输入都会出发绑定的事件，防抖就是隔一段时间后再进行触发，减少请求的次数
// 在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时。
// function debounce(fn, delay) {
//     let timer = null
//     return function () {
//         if (timer !== null) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             fn.call(this)
//         }, delay)
//     }
// }
// 节流：滚动时候需要触发绑定事件，减少触发次数
// 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
// function throttle(fn, delay) {
//     let timer = true
//     return function () {
//         if (timer) {
//             timer = setTimeout(() => {
//                 fn.call(this)
//                 timer = true
//             }, delay)
//         }
//         timer = false
//     }
// }

//-----------------------------
/** 使用js写一个单词折行算法 */
function wordWrap(str, maxWidth) {
    let lines = str.trim().split(" "), words = [], lineLength = 0
    lines.forEach(line => {
        let wordLength = line.length
        if (lineLength + wordLength > maxWidth) {
            lineLength = wordLength
            words.push(line)
        } else {
            lineLength += wordLength + 1
            words[words.length - 1] += " " + line
        }
    });
    print(words)
    return words.join("\n")
}
wordWrap("The quick brown fox jumps over the lazy dog", 10)
