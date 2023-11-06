import type { NextRequest } from "next/server";

export const config = {
  matcher: "/property/:path*",
};

export function middleware(request: NextRequest) {}
