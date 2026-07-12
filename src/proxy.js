import { NextResponse } from "next/server";

const CANONICAL_HOST = "swarikaro.com";

export function proxy(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  if (host.startsWith("www.")) {
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  response.headers.set("x-robots-tag", "index, follow");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};