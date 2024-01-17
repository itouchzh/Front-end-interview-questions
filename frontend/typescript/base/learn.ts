//1. 基本数据类型
const a: number = 20
console.log(a) // 20

const bool: boolean = true
console.log(bool) // true

// 2. 接口
interface Person {
    name: string
    age: number
}
// 接口需要实现其全部属性
const person: Person = {
    name: 'paul',
    age: 23,
}

console.log(person) // { name: 'paul', age: 23 }
// 接口可以继承
interface A {
    name: string
}
interface B extends A {
    age: number
}
// 必须全部实现其属性，包括继承属性
const b: B = {
    name: 'b',
    age: 24,
}
// 使用？代表可选
interface C {
    name?: string
    age: number
    // 定义一个任意类型为string的属性，没有属性名字
    [propName: string]: any
    // 只读，不能去更改
    readonly id: number
}
const c: C = {
    id: 1,
    age: 23,
    address: '西安',
}
console.log(c) // { id: 1, age: 23, address: '西安' }

// 3. 数组
// 只能放number
let arr: number[] = [1, 2, 3, 4, 5]
// 都可以放
let arr1: any[] = [1, 2, 3, 'a', true]
// 数组泛型
let arr2: Array<number> = [1, 2, 3]
// arguments
function Arr(...args: any): void {
    // IArguments 内置类型
    let arr: IArguments = arguments
    console.log(arr) // [Arguments] { '0': 1, '1': 2, '2': 3 }
}
Arr(1, 2, 3)

// 4.函数

const fn = (name: string, age?: number): void => {
    console.log(`${name} -- ${age}`)
}
fn('paul')
// 接口定义函数
interface Add {
    (num: number, num2: number): number
}
const add: Add = (num: number, num2: number): number => {
    return num + num2
}
interface User {
    name: string
    age: number
}
const getUser = (user: User): User => {
    return user
}
// 函数重载
function fn1(params: number): void
function fn1(params: number, params2: string): void
function fn1(params: number, params2?: string): void {
    console.log(params)
}

// 5. 断言 | 联合类型 | 交叉类型
const phone: number | string = '010'
// 交叉类型
interface Toys {
    name: number
}
interface Toys1 {
    age: number
}
const u: Toys & Toys1 = {
    name: 1,
    age: 23,
}
// 断言
const fn3 = (type: number | string): void => {
    console.log((type as string).length) // undifined
}
fn3(123)
// 6.枚举
enum Types {
    Red, // 0
    Green, //1
    Pink, // 2
}

// 7.类型别名
// 使用type将string类型叫做str
type str = string
let cat: str = 'string'

// 8.Symbol
const symbol1 = Symbol(1)
const symbol2 = Symbol(2)
const obj = {
    [symbol1]: 'paul',
    [symbol2]: '23',
    sex: 'man',
}
for (const key in obj) {
    console.log(key)
}
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
// 可以拿到Symbol
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(1), Symbol(2) ]
// Reflect 可以拿到所有属性
console.log(Reflect.ownKeys(obj)) //[ 'sex', Symbol(1), Symbol(2) ]

// 9.泛型
function AddOne<T>(a: T, b: T): Array<T> {
    console.log([a, b])

    return [a, b]
}
AddOne(1, 2)
// 泛型约束,通过extends
function AddOne1<T extends number>(a: T, b: T): number {
    return a + b
}
// keyof 将对象的key推为联合类型

// 类型拓展与类型缩小

// let t1 = null
// let t2 = undefined
// const t3 = null
// const t4 = undefined

// 交叉类型和联合类型
// 接口类型一旦定义了任意属性那么'确定属性和可选属性的类型都必须是它的类型的子集'
// interface Person1 {
//     name: string
//     age: number // 报错
//     [propName: string]: string // 改正 [propName: string]: any; 或者 [propName: string]: string|number
// }

// 泛型
// 函数声明
// let getArray: <T>(arg: T, times: number) => T[]
// declare function getArray1<T>(arg: T): T
// //
// //泛型和 interface
// interface KeyPair<T, U> {
//     key: T
//     value: U
// }

// // 泛型约束 extends
// interface KeyPair1<T extends string | number> {
//     name: T
// }

// // 枚举
// enum State {
//     Ready,
//     Waiting,
// }

// interface A1 {
//     a: string
// }
// interface A1 {
//     b: string
// }
// const c12: A1 = {
//     a: 'a',
//     b: 'b',
// }


