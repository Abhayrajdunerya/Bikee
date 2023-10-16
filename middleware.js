import { NextResponse, NextRequest } from "next/server";

export const middleware = (req) => {


    // return true;
    // return NextResponse.redirect(new URL('/', req.url));
} 

export const config = {
    mathcher: [
        '/employee/:path*',
        '/admin/:path*',
        '/renter/:path*',
    ]
}