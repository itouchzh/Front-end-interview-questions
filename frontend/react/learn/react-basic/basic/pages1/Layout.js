
import {Outlet} from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            layout
            二级路由出口
            <Outlet></Outlet>
        </div>
    )
}
export default Layout
