import { handlers, isAuthEnabled } from "lib/auth"

export const { GET, POST } = isAuthEnabled() ? handlers : {
  GET: () => new Response(null, { status: 200 }),
  POST: () => new Response(null, { status: 200 })
}