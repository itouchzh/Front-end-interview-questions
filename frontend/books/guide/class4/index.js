// 原始数据类型
// number string null undefined boolean bigInt Symbol
// 引用数据类型 object array function

const a = [1, 2, 3]
delete a[2]
console.log(2 in a)
console.log(a)

const obj = {
    name: 'paul',
    age: 23,
}

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value)
}

const map = new Map()
map.set('name', 'paul')
for (const [key, value] of map) {
    console.log(key, value)
}

// console.log(fn);
// if (true) {
//     function fn() { }
//     fn = 5
// }
// console.log(fn);

f = function () {
    return true
}
g = function () {
    return false
}
    
    
(function () {
    if (g() && [] == ![]) {
        f = function () {
            return false
        }
        function g() {
            return true
        }
    }
})()
console.log(f())
console.log(g())
