import { configureStore } from '@reduxjs/toolkit'

import counterStore from './modules/counterStore'

export default configureStore({
    reducer: {
        counterStore,
    },
})
