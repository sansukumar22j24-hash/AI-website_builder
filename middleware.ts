// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!_next|.*\\..*|favicon.ico).*)', // protect all routes except static assets
  ],
}
