// 路由
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Article from './Article'
import Layout from './Layout'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path='/about' element={<Article />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
