import React from 'react'
import routes from './router'
import { useRoutes } from 'react-router'
import { Link } from 'react-router-dom'

function App() {
    const outlet = useRoutes(routes)
    return (
        <div className="App">
            <h1>Hello Wrold</h1>
            <Link to="/home">主页</Link>
            <Link to="/about">关于</Link>
            {outlet}
        </div>
    )
}

export default App
