"use client"
import React from 'react'

const Menu = (props: any) => {
    return (
        <div>
            <div>
                {props.naem} ---- {props.message}
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default Menu
