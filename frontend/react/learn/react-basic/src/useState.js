import { useState } from 'react'
function initCount() {
    console.log(1);
    return 1
}
function App() {
    const [count, setCount] = useState(0)
    const handleAddCount = () => {
        console.log(count); // 0
        setCount(() => count + 10)
        console.log(count); // 0
        setTimeout(() => {
            console.log(count); // 0
        }, 5000)
    }
    const handleMinusCount = () => {
        setCount(count - 1)
    }
    return (
        <div className="app">
            <h1>Hello React UseState</h1>
            <button onClick={handleAddCount}>+</button>
            {count}
            <button onClick={handleMinusCount}>-</button>
        </div>
    )
}

export default App
// import { useState } from 'react'
// function App() {
//     const [studentsInfo, setStudentsInfo] = useState([
//         {
//             name: 'paul',
//             age: 23,
//         },
//     ])
//     const handleAddStudent = () => {
//         // 正确的做法
//         setStudentsInfo([...studentsInfo, { name: 'xiaoxin', age: 20 }])
//         // 错误的做法
//         // setStudentsInfo(studentsInfo.push({
//         //     name: 'xiaoxin',
//         //     age:25
//         // }))
//     }
//     return (
//         <div className="app">
//             <h1>Hello React UseState</h1>
//             <ul>
//                 {studentsInfo.map((item) => (
//                     <li key={item.name}>
//                         {item.name} ----- {item.age}
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleAddStudent}>点我修改学生信息</button>
//         </div>
//     )
// }

// export default App
