import { query } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(): Promise<any> {
    try {
        const users = await query({
            query: 'SELECT * FROM users',
            values: [],
        })
        console.log(users)
        return NextResponse.json(users)
    } catch (error) {
        console.error('Error fetching users:', error)
        return NextResponse.json({ error: 'Failed to fetch users' })
    }
}
