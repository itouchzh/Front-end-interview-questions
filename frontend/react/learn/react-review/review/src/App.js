import './App.css'

function Son({ children, size = 90}) {
    return (
        <>
            {children}---{size}
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Son>
                <h1>Hello World</h1>
            </Son>
        </div>
    )
}

export default App
