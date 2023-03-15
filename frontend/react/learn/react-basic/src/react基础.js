import './app.css'
let name = 'paul'
// 列表渲染
const songs = [
    { id: 1, name: 'song1' },
    { id: 2, name: 'song2' },
    { id: 3, name: 'song3' },
]
const flag = false

//  行内样式
const redColor = {
  color: 'red'
}
function App() {
    return (
        <div className="App">
            <header> {name} </header>
            <hr></hr>
            <div className="song">
                <ul>
                    {songs.map((item) => (
                        <li key={item.id}>
                            {item.id} 歌曲 {item.name}
                        </li>
                    ))}
                </ul>
                <hr></hr>
                {/* 条件渲染 */}
                <div>{flag ? 'React' : 'Good'}</div>
            </div>
            {/* 5. 样式处理 */}
            <div style={{color: 'red'}}> This is red Color , do u know ? </div>
            <div style = {redColor}> This is Blue</div>
            <div className = 'redc'> This is Class name</div>
        </div>
    )
}

export default App
