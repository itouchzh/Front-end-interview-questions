function simpleDecorator(value: any, context: any) {
    console.log(value, context)
    return value
}

@simpleDecorator('1', '2')
class A {}

// 示例二
interface T {
    // age: number
    [prop: string]: number
}

// string|number
type KeyT = keyof T

// type T3 = NonNullable<string | number | undefined> // string | number

// interface User1 {
//     name: string
//     age: number
//     address: string
// }

// // Record<Keys, Type> Record<Keys, Type>返回一个对象类型，参数Keys用作键名，参数Type用作键值类型。
// // { a: number, b: number }
// type TRecord = Record<'a' | 'b', number>

// // Required<Type>返回一个新类型，将参数类型Type的所有属性变为必选属性。它与Partial<Type>的作用正好相反。
// interface A {
//     x?: number
//     y: number
// }

// type TA = Required<A> // { x: number; y: number; }
