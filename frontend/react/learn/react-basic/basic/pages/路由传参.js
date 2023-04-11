// 路由
import Login from './Login'
import Home from './Home'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            {/* 配置路由 */}
            <BrowserRouter>
                {/* 配置跳转到哪里，主要是路由 */}
                <Link to="/"> 首页</Link>
                <Link to="/about"> 关于</Link>
                {/* 跳转到的地方对应的组件写在这里 */}
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    {/* 如果需要使用/传参，需要提前占位 */}
                    <Route path="/about/:id" element={<About></About>}></Route>
                    {/* 把路由添加上 */}
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
