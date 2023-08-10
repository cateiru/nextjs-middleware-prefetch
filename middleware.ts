import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  console.log(url.pathname);

  if (url.pathname === "/" || url.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  url.pathname = `/a${url.pathname}`;
  return NextResponse.rewrite(url);
}
