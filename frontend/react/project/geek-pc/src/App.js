import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
// 引入antd.css
import 'antd/dist/reset.css'
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
