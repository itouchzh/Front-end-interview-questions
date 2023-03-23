import React from 'react'
import LoginStore from './Login.Store'

class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
    }
}

const rootStore = new RootStore()
const StoresContext = React.createContext(rootStore)
const useStore = () => React.useContext(StoresContext)

export { useStore }

// 导入useStore方法供组件使用数据
// const StoresContext = React.createContext(new RootStore())
// const useStore = () => React.useContext(StoresContext)
// export { useStore }
