import { NextResponse } from "next/server";

const CANONICAL_ORIGIN = "https://swarikaro.com";

export function proxy(request) {
  const forwardedHost =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";

  const hostname = forwardedHost.split(":")[0].toLowerCase();

  if (hostname === "www.swarikaro.com") {
    const destination = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      CANONICAL_ORIGIN,
    );

    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};