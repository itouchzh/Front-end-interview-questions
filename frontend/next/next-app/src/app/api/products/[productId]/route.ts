import { NextResponse } from "next/server"
import data from '../../../../../data.json'
export async function GET(request: Request, context: any) {
    const { params } = context
    console.log(context)
    // console.log(request)
    const product = data.filter(item => item.id.toString() === params.productId)
    return NextResponse.json(product)
}