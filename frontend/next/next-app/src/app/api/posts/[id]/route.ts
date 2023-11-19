import { NextRequest, NextResponse } from "next/server";

const posts: any = [{
    id: 12,
    title: 'Hello',
    description: 'Test description'
}]

export async function GET(request: NextRequest, context: any) {
    const { params } = context
    console.log(context)
    const post = posts.filter((item: any) => item.id.toString() === params.id)
    return NextResponse.json(post)
}