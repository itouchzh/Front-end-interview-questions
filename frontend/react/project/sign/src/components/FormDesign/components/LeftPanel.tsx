import React from 'react'
import { basicsList } from '../config/formItemsConfig'
export default function LeftPanel() {
    return (
        <div className="w-52 bg-red-50 border-solid border-4 border-gray-300">
            <h1 className="text-center text-red-400 text-[20px]">组件</h1>
            <div>
                {basicsList.map((item, index) => {
                    return <div key={index}>{item.label}</div>
                })}
            </div>
        </div>
    )
}
