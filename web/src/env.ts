import { z } from 'zod'

const envSchema = z.object({
  VITE_BACKEND_URL: z.string().url(),
  VITE_FRONTEND_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsedEnv.error.format()
  )
  throw new Error('Invalid environment variables')
}

export const env = {
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  frontendUrl: import.meta.env.VITE_FRONTEND_URL,
}