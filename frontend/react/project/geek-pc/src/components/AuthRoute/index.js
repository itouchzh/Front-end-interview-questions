// 判断token是否存在，如果存在，则可以跳转到里面，否则跳转到登录页面

import { getToken } from '../../utils'
import { Navigate } from 'react-router-dom'

function AuthRoute({ children }) {
    const isToken = getToken()

    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to="/login"></Navigate>
    }
}

export { AuthRoute }
