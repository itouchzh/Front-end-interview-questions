"use strict";
//1. 基本数据类型
const a = 20;
console.log(a); // 20
const bool = true;
console.log(bool); // true
// 接口需要实现其全部属性
const person = {
    name: 'paul',
    age: 23,
};
console.log(person); // { name: 'paul', age: 23 }
// 必须全部实现其属性，包括继承属性
const b = {
    name: 'b',
    age: 24,
};
const c = {
    id: 1,
    age: 23,
    address: '西安',
};
console.log(c); // { id: 1, age: 23, address: '西安' }
// 3. 数组
// 只能放number
let arr = [1, 2, 3, 4, 5];
// 都可以放
let arr1 = [1, 2, 3, 'a', true];
// 数组泛型
let arr2 = [1, 2, 3];
// arguments
function Arr(...args) {
    // IArguments 内置类型
    let arr = arguments;
    console.log(arr); // [Arguments] { '0': 1, '1': 2, '2': 3 }
}
Arr(1, 2, 3);
// 4.函数
const fn = (name, age) => {
    console.log(`${name} -- ${age}`);
};
fn('paul');
const add = (num, num2) => {
    return num + num2;
};
const getUser = (user) => {
    return user;
};
function fn1(params, params2) {
    console.log(params);
}
// 5. 断言 | 联合类型 | 交叉类型
const phone = '010';
const u = {
    name: 1,
    age: 23,
};
// 断言
const fn3 = (type) => {
    console.log(type.length); // undifined
};
fn3(123);
// 6.枚举
var Types;
(function (Types) {
    Types[Types["Red"] = 0] = "Red";
    Types[Types["Green"] = 1] = "Green";
    Types[Types["Pink"] = 2] = "Pink";
})(Types || (Types = {}));
let cat = 'string';
// 8.Symbol
const symbol1 = Symbol(1);
const symbol2 = Symbol(2);
const obj = {
    [symbol1]: 'paul',
    [symbol2]: '23',
    sex: 'man',
};
for (const key in obj) {
    console.log(key);
}
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
// 可以拿到Symbol
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(1), Symbol(2) ]
// Reflect 可以拿到所有属性
console.log(Reflect.ownKeys(obj)); //[ 'sex', Symbol(1), Symbol(2) ]
// 9.泛型
function AddOne(a, b) {
    console.log([a, b]);
    return [a, b];
}
AddOne(1, 2);
// 泛型约束,通过extends
function AddOne1(a, b) {
    return a + b;
}
// keyof 将对象的key推为联合类型
