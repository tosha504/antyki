import { NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  if (token) {
    if (req.nextUrl.pathname.startsWith("/my-account")) {
      return NextResponse.redirect(new URL("/profile", req.url));
    }
  } else {
    if (req.nextUrl.pathname.startsWith("/profile")) {
      return NextResponse.redirect(new URL("/my-account", req.url));
    }
  }
}

