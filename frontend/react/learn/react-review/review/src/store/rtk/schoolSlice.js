// import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        address: '陕西西安',
        age: 23,
    },
    reducers: {
        changeAddress(state, action) {
            console.log(action.payload)
            state.address = action.address
        },
        changeAge(state, action) {
            state.age = action.age
        },
    },
})

export const { changeAddress, changeAge } = schoolSlice.actions
// export const schoolStore = configureStore(schoolSlice.reducer)
export const { reducer:schoolReducer } = schoolSlice
