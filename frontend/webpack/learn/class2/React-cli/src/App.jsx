import React, { lazy, Suspense } from 'react'
// import Home from './pages/Home/index'
// import About from './pages/About'
import { Link, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function App() {
    return (
        <div>
            <h1>Hello React!</h1>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading.......</div>}>
                <Routes>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
