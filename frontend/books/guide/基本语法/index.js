// let 可以重复赋值且可以使用不同数据类型进行赋值
let a = 123
a = 'string'
a = {
    name: 'paul',
}
console.log(a)

class DefaultMap extends Map {
    constructor(defaultValue) {
        super()
        this.defaultValue = defaultValue
    }

    get(key) {
        if (this.has(key)) {
            return super.get(key)
        } else {
            return this.defaultValue
        }
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0)
        this.totalLetters = 0
    }
    add(text) {
        text = text.replace(/\s/g, '').toUpperCase()
        for (let character of text) {
            let count = this.letterCounts.get(character)
            this.letterCounts.set(character, count + 1)
            this.totalLetters++
        }
    }

    toString() {
        let entries = [...this.letterCounts]

        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1
            } else {
                return b[1] - a[1]
            }
        })

        for (let entry of entries) {
            entry[1] = (entry[1] / this.totalLetters) * 100
        }

        entries = entries.filter((item) => item[1] >= 1)

        let lines = entries.map(([l, n]) => `${l}:${'#'.replace(Math.round(n))} ${n.toFixed(2)}%`)
        return lines.join("\n")
    }
}





