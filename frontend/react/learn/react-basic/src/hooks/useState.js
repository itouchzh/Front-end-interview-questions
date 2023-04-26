let currentState
let isFirst = true

export default function useState(initialState) {
    if (isFirst) {
        currentState = typeof initialState === 'function' ? initialState() : initialState
        isFirst = false
    }
    // 修改状态
    const dispathState = (newState) => {
        // 更新状态
        currentState = typeof newState === 'function' ? newState(currentState) : newState
        render()
    }
    return [currentState, dispathState]
}
