import Student from './pages/Stu'
import testContext from './store/testContext'
import TestuseMemo from './pages/TestuseMemo'
function App() {
    return (
        <testContext.Provider value={{ name: 'paul', age: 28 }}>
            <div className="App">
                <Student></Student>
                <TestuseMemo/>
            </div>
        </testContext.Provider>
    )
}

export default App
