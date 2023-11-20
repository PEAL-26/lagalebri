import { NextRequest, NextResponse } from 'next/server';

const AUTH_ROUTES = ['/login'];

export function middleware(req: NextRequest, res: NextResponse) {
  const isAuthenticated = req.cookies.get('token')?.value;
  const loginURL = new URL('/login', req.url);
  const dashboardURL = new URL('/dashboard', req.url);
  const { pathname } = req.nextUrl;

  if (!isAuthenticated && !AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(loginURL);
  }

  if (isAuthenticated && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(dashboardURL);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
