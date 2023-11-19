import React from 'react'

const fetchPost = async (postId: string) => {
    const post = await fetch(`http://127.0.0.1:3000/api/posts/${postId}`, {
        method: 'GET',
        // The server will cache the data by default. Set 'next revalidate' to change the time for caching, and use 'cache: 'no-cache'' to prevent data caching.

        // On the client side, data is not cached by default. You can use 'cache: 'cache-forced'' to force data caching.

        cache: 'no-store',

        next: {
            revalidate: 5,
        },
    })
    return post.json()
}
// hooks for get metadata
export async function generateMetadata({ params }: any) {
    const post = await fetchPost(params.id)
    return {
        title: post[0].title,
        description: post[0].description,
        locale: 'en-US',
        type: 'website',
    }
}

const PostIdPage = ({ params }: any) => {
    return <main>{params.id}</main>
}

export default PostIdPage
