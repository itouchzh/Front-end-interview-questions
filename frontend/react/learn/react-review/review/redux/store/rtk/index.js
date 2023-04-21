import { configureStore } from '@reduxjs/toolkit'
import { studentReducer } from './stuSlice'
import { schoolReducer } from './schoolSlice'

export const store = configureStore({
    reducer: {
        student: studentReducer,
        school: schoolReducer,
    },
})
