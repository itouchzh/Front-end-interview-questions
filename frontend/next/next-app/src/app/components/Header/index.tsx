"use client"
import React from 'react'
import Menu from '@/app/components/Header/Menu'

const HeaderComponent = (props: any) => {
    return (
        <div>
            <Menu {...props}>
                <h1>Hello World!-----this is children</h1>
            </Menu>
        </div>
    )
}

export default HeaderComponent
