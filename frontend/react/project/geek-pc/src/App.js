import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Artical from './pages/Artical/index'
import Publish from './pages/Publish/index'
import Login from './pages/Login'
// 引入antd.css
import 'antd/dist/reset.css'
import './App.css'
import { AuthRoute } from './components/AuthRoute'

import { HistoryRouter, history } from './utils/history'
function App() {
    return (
        <HistoryRouter history={history}>
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
                    >
                        <Route index element={<Home></Home>}></Route>
                        <Route path="article" element={<Artical></Artical>}></Route>
                        <Route path="publish" element={<Publish></Publish>}></Route>
                    </Route>

                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </div>
        </HistoryRouter>
    )
}

export default App
