'use client'
import { useAppContext } from '@/context'
import React from 'react'



interface PostPageProps {
    name: string
    id: number
}
const PostPage = ({ posts }: any) => {
    const { name, setName } = useAppContext()
    console.log(posts);
    
    return (
        <div>
            <h1>{name}</h1>
            <h1>Posts page</h1>
            <button className=" border" onClick={() => setName('joe')}>
                change name
            </button>
            <hr />
            <ul>
                {posts?.map((post: any) => (
                    <li key={post.id}>
                        {post.id}----{post.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostPage
