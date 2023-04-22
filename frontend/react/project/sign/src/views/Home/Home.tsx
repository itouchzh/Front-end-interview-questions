import React, { useState } from 'react'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { SelectInfo } from 'rc-menu/lib/interface'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

const items: MenuItem[] = [
    getItem('用户管理', '/home/user', <PieChartOutlined />),
    getItem('班级管理', '/home/classes', <DesktopOutlined />),
    getItem('车辆管理', '/cars', <UserOutlined />, [
        getItem('Tom', '/home/detection'),
        getItem('Bill', '/home/results'),
        // getItem('Alex', 'detection'),
    ]),
    getItem('地点管理', 'sub2', <UserOutlined />, [
        getItem('陕西', '1'),
        getItem('辽宁', '2'),
        getItem('西安', '3'),
    ]),
]

const Home: React.FC = () => {
    // 获取路由位置
    const location = useLocation()
    const [collapsed, setCollapsed] = useState(false)

    // 初始展开
    let firstOpenKey: string = ''
    const findKey = (obj: { key: string }) => {
        return obj.key === location.pathname
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].find(findKey)) {
            // console.log(items[i]!['children'])
            firstOpenKey = items[i]?.key as string
        }
    }
    // 当前菜单展开项
    const [openKeys, setOpenKeys] = useState<string[]>([firstOpenKey])
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    // 点击侧边栏获取路由
    const onSelect = (e: SelectInfo) => {
        // console.log(e.key)
        navigate(`${e.key}`)
    }

    // SubMenu 展开/关闭的回调
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys.at(-1) as string])
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={[location.pathname]}
                    mode="inline"
                    items={items}
                    onSelect={(e) => onSelect(e)}
                    onOpenChange={handleOpenChange}
                    openKeys={openKeys}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb
                        style={{ margin: '16px 0' }}
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: <a href="">Application Center</a>,
                            },

                            {
                                title: 'An Application',
                            },
                        ]}
                    ></Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', height: '48px' }}>
                    Ant Design ©2023 Created by rick_Han
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Home
