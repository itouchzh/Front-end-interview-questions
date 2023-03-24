import { Link, useNavigate } from 'react-router-dom'
import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    DatePicker,
    Select,
    Table,
    Tag,
    Space,
    Popconfirm,
} from 'antd'
// import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import './index.scss'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '../../assets/error.png'
import { useEffect, useState } from 'react'
import { http } from '../../utils'
import { useStore } from '../../store/index'
import { observer } from 'mobx-react-lite'

const { Option } = Select
const { RangePicker } = DatePicker


function Artical() {
    const { channelsStore } = useStore()
    // console.log(channelsStore.channelsList)
    // 获取频道列表
    // const [channels, setChannels] = useState([])
    // useEffect(() => {
    //     async function fetchChannels() {
    //         const res = await http.get('/channels')
    //         console.log(res)
    //         setChannels(res.data.channels)
    //     }
    //     fetchChannels()
    // }, [])
    // 删除文章回调
    const delArticle = async (data) => {
        // console.log(data)
        await http.delete(`/mp/articles/${data.id}`)
        setParams({
            page: 1,
            per_page: 10,
        })
    }

    // 点编辑跳转
    const navigate = useNavigate()
    const goPublish = (data) => {
        navigate(`/publish?id=${data.id}`)
    }
    // table data
    const columns = [
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            render: (cover) => {
                return <img src={cover || img404} width={80} height={60} alt="" />
            },
        },
        {
            title: '标题',
            dataIndex: 'title',
            width: 220,
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (data) => <Tag color="green">审核通过</Tag>,
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate',
        },
        {
            title: '阅读数',
            dataIndex: 'read_count',
        },
        {
            title: '评论数',
            dataIndex: 'comment_count',
        },
        {
            title: '点赞数',
            dataIndex: 'like_count',
        },
        {
            title: '操作',
            render: (data) => {
                return (
                    <Space size="middle">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<EditOutlined />}
                            onClick={() => goPublish(data)}
                        />
                        <Popconfirm
                            title="确认删除该条文章吗"
                            onConfirm={() => delArticle(data)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            />
                        </Popconfirm>
                    </Space>
                )
            },
        },
    ]
    const data = [
        {
            id: '8218',
            comment_count: 0,
            cover: {
                images: ['http://geek.itheima.net/resources/images/15.jpg'],
            },
            like_count: 0,
            pubdate: '2019-03-11 09:00:00',
            read_count: 2,
            status: 2,
            title: 'wkwebview离线化加载h5资源解决方案',
        },
    ]

    // 文章列表数据管理
    const [article, setArticleList] = useState({
        list: [],
        count: 0,
    })
    // 参数管理：
    const [params, setParams] = useState({
        page: 1,
        per_page: 10,
    })

    // 请求接口：
    useEffect(() => {
        async function fetchArticleList() {
            const res = await http.get('/mp/articles', {
                params,
            })
            // console.log(res)
            const { results, total_count } = res.data

            setArticleList({
                list: results,
                count: total_count,
            })
        }
        fetchArticleList()
    }, [params])

    // 筛选功能：
    const onSearch = (values) => {
        const { status, channel_id, date } = values
        const _params = {}
        _params.status = status
        if (channel_id) {
            _params.channel_id = channel_id
        }
        if (date) {
            _params.begin_pubdate = date[0].format('YYYY-MM-DD')
            _params.end_pubdate = date[1].format('YYYY-MM-DD')
        }

        setParams({
            ...params,
            ..._params,
        })
    }

    // 分页
    const pageChange = (page) => {
        // console.log(page)
        setParams({
            ...params,
            page,
        })
    }
    return (
        <div>
            <Card
                title={
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: '首页',
                                href: '/home',
                            },
                            {
                                title: '内容管理',
                            },
                        ]}
                    >
                        {/* <Breadcrumb.Item>
                            <Link to="/home">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>内容管理</Breadcrumb.Item> */}
                    </Breadcrumb>
                }
                style={{ marginBottom: 20 }}
            >
                <Form initialValues={{ status: -1 }} onFinish={onSearch}>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={-1}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={1}>待审核</Radio>
                            <Radio value={2}>审核通过</Radio>
                            <Radio value={3}>审核失败</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="频道" name="channel_id">
                        {/* 渲染选择列表 */}
                        <Select placeholder="请选择文章频道" style={{ width: 120 }}>
                            {channelsStore.channelsList.map((item) => {
                                return (
                                    <Option value={item.id} key={item.id}>
                                        {item.name}
                                    </Option>
                                )
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker locale={locale}></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            {/* Table */}
            <Card title={`根据筛选条件共查询到 ${article.count} 条结果：`}>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={article.list}
                    pagination={{
                        position: ['bottomCenter'],
                        current: params.page,
                        pageSize: params.per_page,
                        onChange: pageChange,
                        total: article.count,
                    }}
                />
            </Card>
        </div>
    )
}

export default observer(Artical)
