import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isLoogedIn: boolean = true;

export function middleware(request: NextRequest) {
    let token = request.cookies.get("token");
    if (isLoogedIn) {
        return NextResponse.next();
    }
    if (!token) {
        return NextResponse.redirect("/login");
    }
    return NextResponse.redirect("/login");
}