import { Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useRef, useState } from 'react'
import { http } from '../../utils/index'
import { useStore } from '../../store/index'
import { observer } from 'mobx-react-lite'
import { useSearchParams } from 'react-router-dom'
const { Option } = Select
function Publish() {
    // 频道：
    const { channelsStore } = useStore()
    const [fileList, setFileList] = useState([])
    // 暂存图片列表
    const fileListRef = useRef([])
    // 上传图片时候，将图片存储到ref中
    // 上传：
    const onUploadChange = ({ fileList }) => {
        // const fileList = fileList.fileList.map((file) => {
        //     if (file.response) {
        //         console.log(file)
        //         return {
        //             url: file.response.data.url,
        //         }
        //     }
        //     return file
        // })
        const formatList = fileList.map((file) => {
            if (file.response) {
                return { url: file.response.data.url }
            }
            return file
        })
        fileListRef.current = formatList
        setFileList(formatList)
    }
    // 切换图片
    const [imgCount, setImgCount] = useState(1)
    const changeType = (e) => {
        const count = e.target.value
        setImgCount(count)
        if (fileListRef.current.length === 0) {
            return false
        }
        if (count === 1) {
            const firstImg = fileListRef.current[0] ? fileListRef.current[0] : []
            setFileList([firstImg])
        } else if (count === 3) {
            setFileList(fileListRef.current)
        }
    }
    // 发布文章
    const onFinish = async (values) => {
        // console.log(fileList)
        const { type, ...rest } = values
        const params = {
            ...rest,
            cover: {
                type: type,
                images: fileList.map((item) => item.url),
            },
        }
        if (articleId) {
            await http.put(`/mp/articles/${articleId}?draft=false`, params)
        } else {
            await http.post('/mp/articles?draft=false', params)
        }
    }

    // 路由传参判断
    const [parms] = useSearchParams()
    const articleId = parms.get('id')

    const [form] = Form.useForm()
    // 回显文章
    useEffect(() => {
        async function getArticle() {
            const res = await http.get(`/mp/articles/${articleId}`)
            const { cover, ...formValue } = res.data
            form.setFieldsValue({ ...formValue, type: cover.type })
            const imageList = cover.images.map((url) => ({ url }))
            setFileList(imageList)
            setImgCount(cover.type)
            fileListRef.current = imageList
        }
        if (articleId) {
            getArticle()
        }
    }, [articleId])

    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: 'home',
                                href: '/home',
                            },
                            {
                                title: articleId ? '修改文章' : '发布文章',
                            },
                        ]}
                    ></Breadcrumb>
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ content: '' }}
                    onFinish={onFinish}
                    form={form}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                            {channelsStore.channelsList.map((item) => (
                                <Option key={item.id} value={item.id}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={changeType}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {imgCount > 0 && (
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList
                                action="http://geek.itheima.net/v1_0/upload"
                                fileList={fileList}
                                onChange={onUploadChange}
                                multiple={imgCount > 1}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入文章内容"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                {articleId ? '修改文章' : '发布文章'}
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default observer(Publish)
