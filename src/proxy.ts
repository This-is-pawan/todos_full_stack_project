import { NextRequest, NextResponse } from "next/server";

export const proxy=(req:NextRequest)=>{
try {
 const token=req.cookies.get('token')?.value;
 if(!token){
console.log('token is not exist');
return NextResponse.redirect(new URL('/login',req.url))
 }
return NextResponse.next()
} catch (error) {
 console.log(error);
 
 return NextResponse.next()
}
}
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/todos/:path*",
  ],
};