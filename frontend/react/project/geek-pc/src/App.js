import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
// 引入antd.css
import 'antd/dist/reset.css'
import { AuthRoute } from './components/AuthRoute'
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* 需要鉴权的路由 */}

                    <Route
                        path="/*"
                        element={
                            <AuthRoute>
                                <Layout />
                            </AuthRoute>
                        }
                    ></Route>

                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
