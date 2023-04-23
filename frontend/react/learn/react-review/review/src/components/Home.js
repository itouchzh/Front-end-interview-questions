import { useCallback, useMemo } from 'react'
const Home = () => {
    // useCallback() and useMemo()
    // useCallback 是用来长期稳定的维护一个函数的引用的，会保存函数的引用，当下次渲染时，会重新进行调用
    // 而不是重新创建
    // 如果[]中不写依赖项，则每次取到的都是第一次的值
    const fetchStudent = useCallback(() => {
        
    },[])

    return (
        <>
            <h1>Hello Home</h1>
        </> 
    )
}
export default Home
