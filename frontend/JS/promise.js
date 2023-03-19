// 手写promise

// 定义三个状态：
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
    constructor(executor) {
        this.status = PENDING
        // 存放成功状态的值
        this.value = undefined
        // 存放失败状态的值
        this.reason = undefined

        let resolve = function (value) {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
            }
        }

        let reject = function (reason) {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }
        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
    }
}
