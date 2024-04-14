import {NextRequest, NextResponse} from "next/server";

export function middleware(req:NextRequest, res:NextResponse){
    //possible examples
    //check is cookies exists--if not then assign cookie to the user
    const allCookies=req.cookies.getAll()
    console.log(allCookies)
    const response=NextResponse.next({
        request:{
            headers: new Headers(req.headers)
        }
    })
    response.headers.forEach((header)=>{
        console.log('header',header)
    })
    return NextResponse.next()
}

export const config={
    matcher:'/'
}