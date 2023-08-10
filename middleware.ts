import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // If the path is `/` we want to continue to the next middleware
  if (url.pathname === "/") {
    return NextResponse.next();
  }

  // If the path is `/b` we want to redirect to `/a/b`
  url.password = `/a${url.pathname}`;
  return NextResponse.rewrite(url);
}
