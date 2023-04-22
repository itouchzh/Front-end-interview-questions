import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
// import About from '@/views/About'
// import Home from '@/views/Home'
// 懒加载
const About = lazy(() => import('@/views/About'))
const Home = lazy(() => import('@/views/Home'))

const suspense = (comp: JSX.Element) => ( <Suspense fallback={<div>Loading...</div>}>{comp}</Suspense>)
   


const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        path: '/home',
        element: suspense(<Home />),
    },
    {
        path: '/about',
        element: suspense(<About />),
    },
]
export default routes
