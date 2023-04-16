// 泛型，泛型类、泛型函数、泛型接口
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// Class Generics
class GenericsNumber<T> {
    zeroValue: T
}

// 函数泛型
/**
 * @param length array of length
 * @param value array of value
 * @returns Returns an array of value type T
 */
function createArray<T>(length: number, value: T): Array<T> {
    let res: T[] = []
    for (let i = 0; i < length; i++) {
        res[i] = value
    }
    return res
}

let cArr = createArray<string>(3, 'a')
console.log(cArr) // ['a', 'a', 'a']

// interface generic
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>
}

// any unknown never
// any 相当于放弃了类型检查 ，可以将任意类型赋给any
let testA: any = 'string'
// 也可以把any赋值给任何类型，除了never
let testAA: unknown = testA
// unknown 任何类型都可以分配给unknown，但unknown只能分配给unknown和any
let test1: unknown = 'Hello'
let test2: any = test1
// let test3:string = test1 //不可以
let test3: unknown = test1
// never bottom type,可以赋值给任何类型，但是任何类型都不能给never赋值
// void 只能赋值 给 any 和unknown ,any 、never、undefined 可以赋值给void

// const readonly
// const 代表对变量不可修改，但是可以对其属性进行修改，而readonly 更加严格，对属性也不能进行修改
interface Deer {
    deerId: number
}

// keyof typeof

// keyof 获取某种类型的所有键，返回值为联合类型
const dog = {
    name: 'paul',
    age: 23,
}
// typeof 获取dog的类型
type cat = typeof dog
// test5: const test5: "name" | "age"
const test5: keyof cat = 'name'

//??和?.
// ?.可选链操作符 ，当访问可能不存在的属性或方法时使用，如果都不存在则返回undifined
const obj1 = { a: { b: 1 } }
// const testc = obj1?.c?.d // undefined
// console.log(testc);

// ?? 用于提供默认值，当表达式结果左边为null或undefined时，返回右边的值
const foo = null ?? 'default'
console.log(foo) //default

// module 和 namespace
// namespace 主要是为了解决重名问题
// module用来创建可以重用的模块

// Exclude、Omit、Merge、Intersection、Overwrite
// 工具函数 Exclude<T, U>
type T1 = Exclude<'a' | 'b', 'a'> // Exclude<T, U> T 中 的类型排除 U 剩下的返回，如果没有剩下的就为never
type T2 = Extract<'a' | 'b', 'a'> // 'a'与Exclude相反，包含就返回

interface User {
    id: number
    name: string
    age: number
    email: string
}
// Omit<Type, Keys> 从类型Type中删除指定属性或属性集合，返回一个新类型
type PublicUser = Omit<User, 'email'> // { id: number, name: string, age: number }

type First = { a: number };
type Second = { b: number };

// Merge<MergeType1, MergeType2>：将类型 MergeType1 和类型 MergeType2 合并成一个交叉类型，并返回结果类型。例如：
// type MergedType = MergedT<First, Second>; // { a: number } & { b: number }

// Intersection
// type A1 = { a: number };
// type B1 = { b: string }; 
//将类型 Type1 和类型 Type2 进行交叉运算，得到一个包含两个类型所有属性的新类型。例如：
// type AB = Intersection<A, B>; // { a: number, b: string }

interface User {
  id: number;
  name: string;
}
// 覆盖其中包含的同名属性，并返回一个新类型。例如：
// type UpdatedUser = Overwrite<User, { name: number }>; // { id: number, name: number }