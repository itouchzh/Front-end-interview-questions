import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './pages/Layout'
// import Home from './pages/Home'
// import Artical from './pages/Artical/index'
// import Publish from './pages/Publish/index'
// import Login from './pages/Login'
// 引入antd.css
import 'antd/dist/reset.css'
import './App.css'
import { AuthRoute } from './components/AuthRoute'

import { HistoryRouter, history } from './utils/history'

// 路由懒加载
import { lazy, Suspense } from 'react'
const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./pages/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Artical = lazy(() => import('./pages/Artical'))
const Publish = lazy(() => import('./pages/Publish'))
function App() {
    return (
        <HistoryRouter history={history}>
            <Suspense
                fallback={
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: 200,
                        }}
                    ></div>
                }
            >
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
            </Suspense>
        </HistoryRouter>
    )
}

export default App
