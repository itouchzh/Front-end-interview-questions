// 装饰器，主要有四种
// 类装饰器
const decotators: ClassDecorator = (target: any) => {
    target.prototype.name = 'paul'
    console.log(target)
}

// 属性装饰器
const currency: PropertyDecorator = (target: any, key: string | symbol) => {
    console.log(target, key)
}

// 方法装饰器
const method: MethodDecorator = (
    target: any,
    key: string | symbol,
    descriptor: PropertyDescriptor
) => {
    /**
     * target: {}
     * key:方法名：getAge
     * descriptor: 配置属性
     */
    console.log(target, key, descriptor)
}
const age: ParameterDecorator = (target: any, key: string | symbol, index: number) => {
    console.log(target, key, index)
}

@decotators
class Student {
    @currency
    public age: number

    constructor() {
        this.age = 0
    }

    @method
    getAge() {
        return this.age
    }

    setAge(@age age: number) {
        this.age = age
    }
}

const student: any = new Student()
student.getAge()
student.setAge(10)
console.log(student.age)
