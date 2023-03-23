import React from 'react'
import LoginStore from './Login.Store'
import UserStore from './User.Store'
import ChannelsStore from './Channels.Store'

class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
        this.channelsStore = new ChannelsStore()
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
