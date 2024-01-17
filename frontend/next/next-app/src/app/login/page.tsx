'use client'
import React from 'react'
import { Form, Input, Button } from 'antd'
import { useForm } from 'antd/es/form/Form'
async function getUser(username: string, password: string) {
    const res = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
        }),
    })
    return res.json()
}
const LoginPage = () => {
    const [form] = useForm()
    const onFinish = () => {
        const { username, password } = form.getFieldsValue()
        getUser(username, password).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className="h-[500px] w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <main className="w-full h-full flex justify-center items-center">
                <Form
                    className="w-full p-10 bg-gray-50"
                    onFinish={onFinish}
                    form={form}
                    initialValues={{ username: 'admin', password: '123456' }}
                >
                    <Form.Item label="用户名" labelCol={{ span: 3 }} name={'username'}>
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item label="密码" labelCol={{ span: 3 }} name={'password'}>
                        <Input placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item className="text-center">
                        <Button type="primary" htmlType="submit" className="w-[200px]">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </main>
        </div>
    )
}

export default LoginPage
