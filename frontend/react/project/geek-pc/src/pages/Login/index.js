import { Card, Form, Input, Button, Checkbox } from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'

function Login() {
    // 点击登录，触发该函数
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""></img>
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    onFinish={onFinish}
                    initialValues={{
                        mobile: '15142365895',
                        code: '123456',
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
