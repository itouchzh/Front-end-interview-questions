// import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// 创建一个slice
const stuSlice = createSlice({
    name: 'stu',
    initialState: {
        value: 0,
    },
    reducers: {
        // 里面自动为actions
        // 相当于很多个reducer,reducer接收两个参数，(state,action)
        increment: (state,action) => {
            console.log(action,"=========")
            state.value += action.payload
        },
        decrement: (state,action) => {
            state.value -= 1
        },
    },
})

// 导出方法：也就是导出reducer
export const { increment, decrement } = stuSlice.actions

// export const studentStore = configureStore({
//     reducer: {
//         student: stuSlice.reducer
//     },
// })
// 向外暴露reducer
export const {reducer: studentReducer} = stuSlice