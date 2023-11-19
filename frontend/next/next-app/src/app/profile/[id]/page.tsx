'use client'
import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'

const userProfilePage = ({ params, searchParams }: any) => {
    const param = useParams()
    const searchParam = useSearchParams()
    const name = searchParam.get('name')
    console.log(param)
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            userProfilePage ---- {params.id}
            <h1>{param?.id}</h1>
            <h1>searchParams---{searchParams.name}</h1>
            <h1>searchParams---{name}</h1>
        </div>
    )
}

export default userProfilePage
