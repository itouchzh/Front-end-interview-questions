import { Route, Routes, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Student from './components/Student'
function App() {
    return (
        <div className="App">
            <h1>App</h1>
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="student/:id" element={<Student></Student>}></Route>
            </Routes>
        </div>
    )
}

export default App
