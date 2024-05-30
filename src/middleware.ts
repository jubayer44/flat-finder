import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./constants/authKey";
import { decodedToken } from "./utils/jwt";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/dashboard/edit-profile",
];
const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard\/user/],
  ADMIN: [/^\/dashboard\/admin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;

  const accessToken = cookies()?.get(authKey)?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    (accessToken && commonPrivateRoutes.includes(pathname)) ||
    commonPrivateRoutes.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.next();
  }

  let decoded = null;

  if (accessToken) {
    decoded = decodedToken(accessToken) as any;
  }

  const role = decoded?.role;
  // dynamic condition
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];

    if (routes?.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
