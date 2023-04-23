// 如果让组件重新渲染，就让状态或者属性发生变更
import { useState } from 'react'
export default function useForceUpdate() {
    const [_, setForceObj] = useState({})
    const forceUpdate = () => {
        setForceObj({})
    }
    return forceUpdate
}
