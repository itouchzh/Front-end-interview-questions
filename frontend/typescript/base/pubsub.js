"use strict";
class Dispatch {
    constructor() {
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.list = {};
    }
    on(name, callback) {
        const callbackList = this.list[name] || [];
        callbackList.push(callback);
        this.list[name] = callbackList;
    }
    emit(name, ...args) {
        let eventName = this.list[name];
        if (eventName) {
            eventName.forEach((fn) => {
                fn.apply(this, args);
            });
        }
        else {
            console.log('该事件未被监听');
        }
    }
    off() { }
    once() { }
}
const dispatch = new Dispatch();
// 使用
dispatch.on('click', (...args) => {
    console.log(args);
});
dispatch.emit('click', 1, 2, 3);
