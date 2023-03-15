import React from 'react'

import counter from './counterStore'
import task from './taskStore'

class RootStore {
    constructor() {
        this.counter = counter
        this.task = task
    }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
