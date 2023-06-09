//  webpack 读取配置时候，会执行new TestPlugin()方法
// 然后执行constructor() 方法，然后调用插件的apply()方法

class TestPlugin {
    constructor() {
        console.log('Test constructor()');
    }

    apply(compiler) {
        console.log('Test Plugin', compiler)
    }
}

module.exports = TestPlugin
