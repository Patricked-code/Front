import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/api/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/api/login-stable';
    return NextResponse.rewrite(url);
  }

  if (pathname === '/callback') {
    const url = request.nextUrl.clone();
    url.pathname = '/callback-stable';
    return NextResponse.redirect(url);
  }

  if (pathname === '/investisseurpanel') {
    const url = request.nextUrl.clone();
    url.pathname = '/investisseurpanel/dashboard';
    return NextResponse.redirect(url);
  }

  if (pathname === '/societegestionpanel') {
    const url = request.nextUrl.clone();
    url.pathname = '/societegestionpanel/dashboard';
    return NextResponse.redirect(url);
  }

  if (pathname === '/adminpanel') {
    const url = request.nextUrl.clone();
    url.pathname = '/adminpanel/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/login', '/callback', '/investisseurpanel', '/societegestionpanel', '/adminpanel'],
};
