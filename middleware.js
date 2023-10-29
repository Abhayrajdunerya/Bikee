import { NextResponse, NextRequest } from "next/server";
import { withAuth } from 'next-auth/middleware'

export default withAuth(
    function middleware (req) {
    
        // console.log(req.nextUrl.pathname);
        // console.log(req.nextauth.token);

        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'admin') {
            return NextResponse.rewrite(new URL('/denied', req.url))
        }

        if (req.nextUrl.pathname.startsWith('/manager') && req.nextauth.token?.role !== 'manager') {
            return NextResponse.rewrite(new URL('/denied', req.url))
        }

        if (req.nextUrl.pathname.startsWith('/renter') && req.nextauth.token?.role !== 'renter') {
            return NextResponse.rewrite(new URL('/denied', req.url))
        }

        // if (req.nextUrl.pathname.startsWith('/user') && 
        //     (req.nextauth.token?.role !== 'user' || 
        //     req.nextauth.token?.role !== 'user' ||
        //     req.nextauth.token?.role !== 'user')) {
        //     return NextResponse.rewrite(new URL('/denied', req.url))
        // }
    }, 
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }

)


export const config = {
    mathcher: [
        '/admin/:path*',
        '/manager/:path*',
        '/renter/:path*',
        '/user/:path*',
    ]
}