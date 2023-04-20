import { configureStore, createSlice } from '@reduxjs/toolkit'

// 创建一个slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        // 里面自动为actions
        // 相当于很多个reducer,reducer接收两个参数，(state,action)
        increment: (state,action) => {
            console.log(action,"=========")
            state.value += 1
        },
        decrement: (state,action) => {
            state.value -= 1
        },
    },
})

// 导出方法：也就是导出reducer
export const { increment, decrement } = counterSlice.actions

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
})
