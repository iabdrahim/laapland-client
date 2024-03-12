import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_HOST } from "./utils/api";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    let token = request.cookies.get("access_token")?.value;
    let hasAccess = true;
    try {
      let res = await fetch(API_HOST + "auth/me", {
        headers: { Authorization: "Bearer " + token },
      });
      let user = await res.json();
      if (!user || user.role != "admin") hasAccess = false;
    } catch (err) {
      // TODO: Redirect to auth later
      hasAccess = false;
    }
    if (!hasAccess) {
      return NextResponse.redirect(request.nextUrl.origin);
    }
  }

  const response = NextResponse.next();
  return response;
}
