import React, { useEffect, useState } from 'react'
import { LockOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
// import initLoginBg from './init'
import './login.scss'
const Login: React.FC = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        if (values.username === 'admin' && values.password == '123456') {
            navigate('/home')
        }
        console.log(values)
        console.log('Received values of form: ', values)
    }

    // useEffect(() => {
    //     initLoginBg()
    //     window.onresize = function () {
    //         initLoginBg()
    //     }
    // })

    return (
        <div className="login-main">
            <canvas id="canvas" style={{ display: 'block'}}></canvas>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true, username: 'admin', password: '123456' }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="verificationCode"
                    // rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<KeyOutlined className="site-form-item-icon" />}
                        type="text"
                        placeholder="Verificate Code"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <a href="">现在注册</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
