namespace Re {
    // type User = {
    //     id: number
    //     kind: string
    // }
    // function makeCustomer<T extends User>(u: T): T {
    //     return {
    //         ...u,
    //         id: u.id,
    //         kind: 'customer',
    //     }
    // }
    // function f<T>(a: string | number, b: string | number) {
    //     if (typeof a === 'string') {
    //         return a + ':' + b // no error but b can be number!
    //     } else {
    //         return (a as number) + (b as number)
    //     }
    // }
    // f(2, 3) // Ok
    // f(1, 'a') // Error
    // f('a', 2) // Error
    // f('a', 'b') // Ok
    // type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
    // type SetRequired<T, K extends keyof T> = Required<Pick<T, K>>
    // type Foo = {
    //     a: number
    //     b?: string
    //     c: boolean
    // }
    // // 测试用例
    // type SomeOptional = SetOptional<Foo, 'a' | 'b'>
    // type SomeOptional = {
    // 	a?: number; // 该属性已变成可选的
    // 	b?: string; // 保持不变
    // 	c: boolean;
    // }
    // 4.
    // type ConditionalPick<T, K> = { [P in keyof T as T[P] extends K ? P : never]: T[P] }
    // interface Example {
    //     a: string
    //     b: string | number
    //     c: () => void
    //     d: {}
    // }
    // // 测试用例：
    // type StringKeysOnly = ConditionalPick<Example, string>
    // //=> {a: string}

    /**
     * 定义一个工具类型 AppendArgument，为已有的函数类型增加指定类型的参数，新增的参数名是 x，将作为新函数类型的第一个参数。具体的使用示例如下所示：
     */

    // type Fn = (a: number, b: string) => number
    // type AppendArgument<F extends (...args: any) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F>

    // type FinalFn = AppendArgument<Fn, boolean>
    // (x: boolean, a: number, b: string) => number

    /**
     * 6.
     */
    // type NaiveFlat<T extends any[]> = {
    //     [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P]
    // }[number] 
    // type DeepFlat<T extends any[]> = {
    //     [P in keyof T]: T[P] extends any[] ? DeepFlat<T[P]> : T[P]
    // }[number]
    // // 测试用例：
    // type NaiveResult = NaiveFlat<['a', 'b', ['c'], [['e']]]>
    // // NaiveResult的结果： "a" | "b" | "c" | "d"
}
