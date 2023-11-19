// export { default } from "next-auth/middleware";

import { getCsrfToken, getProviders, getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { authConfig } from "./app/config/auth";

import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export // `withAuth` augments your `Request` with the user's token.
  async function middleware(req) {
  const token = await getToken({ req });
  if (token) {
    if (req.nextUrl.pathname.startsWith("/my-account")) {
      // console.log(1);
      return NextResponse.redirect(new URL("/profile", req.url));
    }
  } else {
    if (req.nextUrl.pathname.startsWith("/profile")) {
      // console.log("23213");
      // console.log(1);
      return NextResponse.redirect(new URL("/my-account", req.url));
    }
  }
}

// export const config = { matcher: ["/profile", '/my-account'] };
