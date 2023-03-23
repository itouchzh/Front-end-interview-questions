import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'
import { useStore } from '../../store'
import { useNavigate } from 'react-router-dom'

function Login() {
    // 获得跳转的实例对象
    const navigate = useNavigate()
    const store = useStore()
    console.log(useStore())
    // 点击登录，触发该函数
    const onFinish = async (values) => {
        try {
            await store.loginStore.getToken({
                mobile: values.mobile,
                code: values.code,
            })
            // 跳转
            navigate('/')
        } catch (error) {
            message.error(error.response?.data?.message || '登录失败')
        }
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""></img>
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    onFinish={onFinish}
                    initialValues={{
                        mobile: '13911111111',
                        code: '246810',
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号格式不对',
                                validateTrigger: 'onBlure',
                            },
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
                            { required: true, message: '请输入验证码' },
                        ]}
                    >
                        <Input size="large" type="text" placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox className="login-checkbox-label">Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login
