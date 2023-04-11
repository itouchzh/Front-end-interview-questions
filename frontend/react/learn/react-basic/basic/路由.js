// 路由

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// 路由组件
const Home = () => <div>This is Home</div>
const About = () => <div>This is About</div>

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
                    <Route path="/about" element={<About></About>}></Route>
                    <Route></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
