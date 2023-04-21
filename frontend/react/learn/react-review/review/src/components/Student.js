import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Student = () => {
    // 路由传参的时候获取值
    const params = useParams()
    console.log(params)
    // 路由
    const location = useLocation()
    // console.log(params) //{id: '1'}
    // console.log(location) 传递路径相关信息

    // 控制路由跳转
    const nav = useNavigate()

    const navAbout = () => {
        // 有历史记录跳转
        nav('/about')
        // 无历史记录跳转
        // nav('/about', { replace: true })
    }
    return (
        <>
            <h1>Hello Student！ </h1>
            <div>我是接收到的参数：{params.id}</div>
            <button onClick={navAbout}>About</button>
        </>
    )
}

export default Student
