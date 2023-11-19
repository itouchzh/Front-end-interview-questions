'use client'
import { useNameContext } from '@/context/name-context'
import React from 'react'

// type User = string
// type Stu = User | number
// interface User {
//     name: string
// }
// interface Stu extends User {
//     age: number
// }
// // const student: Stu = {
// //     name: 'joe',
// //     age: 18,
// // }

// type UserProps = {
//     name: string
//     date: Date
//     age: number
// }

export default function UesrPage() {
    const { name, setName } = useNameContext()
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setName('joe')}>change name</button>
        </div>
    )
}
