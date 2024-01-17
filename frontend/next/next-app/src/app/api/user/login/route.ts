import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { username, password } = body
        console.log(username, password)
        
        return NextResponse.json({ username, password })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}
