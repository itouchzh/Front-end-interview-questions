// 'use client'
import React from 'react'
import Header from '@/app/components/Header'
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: 'Home Page',
//     description: 'Home Page',
//     openGraph: {
//         title: 'Home Page',
//         description: 'Home Page',
//         url: 'http://localhost:3000',
//         siteName: 'Home Page',
//         images: [],
//     },
// }

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/posts')
//     const posts = await res.json()
//     console.log(posts);
    
//     return {
//         props: {
//             posts,
//         },
//     }
// }
const HomePage = ({ posts }: any) => {
    console.log(posts)

    return (
        <>
            <h1>Home Page</h1>
            <Header name="Home Page" message="Hello World!" />
        </>
    )
}

export default HomePage
