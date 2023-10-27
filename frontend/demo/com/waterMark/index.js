// import dayjs from "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
/**
 * 获取水印要插入的元素
 * @param selector 选择器
 */
const getRoot = (selector) => {
    if (selector) {
        if (typeof selector === 'string') {
            const dom = document.querySelector(selector)
            if (dom) {
                return dom
            }
        } else if (selector) {
            return selector
        }
    }
    return document.body
}

const waterMarkId = 'water-mark'

/**
 * 创建水印
 * @param texts 水印的文案
 * @param root 水印插入的位置
 * @returns 样式
 */
const create = (texts, root) => {
    const dpr = window.devicePixelRatio
    const width = 400 * dpr
    const height = 300 * dpr
    const fontSize = 18
    const rotate = -20 // 水印倾斜角度，单位度
    const parentRect = root.getBoundingClientRect()

    const canvas = document.createElement('canvas')
    canvas.style.width = `${width / dpr}px`
    canvas.style.height = `${height / dpr}px`
    canvas.width = width
    canvas.height = height

    canvas.style.display = 'none'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) {
        return ''
    }

    ctx.translate(width / 2, height / 2)
    ctx.rotate((rotate * Math.PI) / 180)
    ctx.translate(-width / 2, -height / 2)

    ctx.font = `${fontSize}px Verdana`
    // ctx.fillStyle = "rgba(17, 17, 17, 0.2)";
    ctx.fillStyle = 'rgba(191, 191, 191, 0.5)'

    // 设置上下左右居中
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // 为避免多行文本重叠到一块
    const half = Math.floor(texts.length / 2)
    texts.push(dayjs().format('YYYY/MM/DD HH:mm:ss'))
    texts.forEach((text, index) => {
        const diff = (fontSize + 8) * Math.abs(index - half)
        const y = index <= half ? height / 2 - diff : height / 2 + diff
        ctx.fillText(text, width / 2, y)
    })

    // 这里为了可以直接使用，就把样式写在了js中，您也可以把样式单独提取出来
    const style = {
        // top: 0,
        // left: 0,
        width: `${parentRect.width}px`,
        height: `${parentRect.height}px`,
        'background-image': `url(${canvas.toDataURL('image/png')})`, // 将生成的图片作为背景图
        // 'background-repeat': 'repeat-y', // 当时我们的项目要求是只向下平铺，您可以自行修改
        'background-position': 'center top',
        position: 'absolute',
        'z-index': 99,
        'pointer-events': 'none',
    }
    const cssText = Object.keys(style)
        .map((key) => `${key}: ${style[key]}`)
        .join(';')

    const waterDom = document.getElementById(waterMarkId)
    if (waterDom) {
        waterDom.parentNode?.removeChild(waterDom)
    }
    const div = document.createElement('div')
    div.id = waterMarkId
    div.style.cssText = cssText

    root.appendChild(div)
    canvas.parentNode?.removeChild(canvas)

    return cssText
}

/**
 * 创建水印
 * @param texts 水印的文案
 * @param selector 水印所在的容器，不传时则默认body
 * @returns 取消监听水印变化的函数
 */
const createWaterMark = (texts, selector) => {
    const root = getRoot(selector)
    const originalCssText = create(texts, root) // 创建水印，并留存样式，用作后续的样式对比

    // 为避免水印被删除或样式被修改，这里监听dom节点的变化
    const observer = new MutationObserver(() => {
        const waterMarkDom = document.getElementById(waterMarkId)
        if (waterMarkDom) {
            // 水印还在，但被修改了样式，重新设置样式
            const newStyle = waterMarkDom.getAttribute('style')
            if (originalCssText !== newStyle) {
                waterMarkDom.setAttribute('style', originalCssText)
            }
        } else {
            // 该水印已被删除，重新创建
            create(texts, root)
        }
    })
    observer.observe(root, {
        attributes: true, // 开启监听属性
        childList: true, // 开启监听子节点
        subtree: true, // 开启监听子节点下面的所有节点
    })

    // 返回一个 destory 方法，用于在 useEffect() 中取消该监听
    return () => {
        observer.disconnect()
    }
}
const dom = document.getElementById('box')
console.log(dom);
createWaterMark(['Hello World'], dom)

