import { NextResponse } from "next/server";

export function GET(request: Request) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
  const appStoreUrl =
    process.env.APP_STORE_URL ?? process.env.NEXT_PUBLIC_APP_STORE_URL;
  const googlePlayUrl =
    process.env.GOOGLE_PLAY_URL ?? process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL;

  const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
  const isAndroidDevice = /android/.test(userAgent);

  const destination = isAppleDevice
    ? appStoreUrl
    : isAndroidDevice
      ? googlePlayUrl
      : (googlePlayUrl ?? appStoreUrl);

  return NextResponse.redirect(destination ?? new URL("/", request.url));
}
