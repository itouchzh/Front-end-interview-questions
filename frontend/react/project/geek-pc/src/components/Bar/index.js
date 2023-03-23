import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
// 组件
// 通过组件传参过来，所以得结构赋值
function Bar({ style, xData, sData, title }) {
    const nodeRef = useRef(null)
    const chartInit = () => {
        const myChart = echarts.init(nodeRef.current)
        // 绘制图表
        myChart.setOption({
            title: {
                text: title,
            },
            tooltip: {},
            xAxis: {
                data: xData,
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: sData,
                },
            ],
        })
    }
    useEffect(() => {
        // 拿到dom以后进行渲染
        chartInit()
    }, [xData, sData])

    return <div ref={nodeRef} style={style}></div>
}

export default Bar
