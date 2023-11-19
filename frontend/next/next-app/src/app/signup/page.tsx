'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
interface User {
    username: string
    password: string
    email: string
}
const signupPage = () => {
    const [userInfo, setUserInfo] = useState<User>({
        username: '',
        password: '',
        email: '',
    })
    const onSignup = () => {
        
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center bg-gray-300 p-4">Signup</h1>
            <div className="flex flex-col items-center">
                <label htmlFor="username">Username</label>
                <input type="text" className="border p-2" placeholder='Username'/>
                <label htmlFor="password">Password</label>
                <input type="password" className="border p-2" placeholder='Password'/>
                <label htmlFor="email">Email</label>
                <input type="text" className="border p-2" placeholder='Email'/>
            </div>
            <button onClick={onSignup}>Login Here</button>
        </div>
    )
}

export default signupPage
