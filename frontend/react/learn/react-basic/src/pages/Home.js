// 导入useNavigate 函数
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    // navigate() 传入目标路径
    return (
        <div>
            Home <button onClick={() => navigate('/about?id=1001')}>点我跳转到About页面?id=1001</button>
            Home <button onClick={() => navigate('/about/1001')}>点我跳转到About页面/id=1001</button>
        </div>
    )
}

export default Home
