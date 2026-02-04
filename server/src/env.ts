import "dotenv/config";
import { z } from "zod";

const emptyToUndefined = (v: unknown) =>
  typeof v === 'string' && v.trim() === '' ? undefined : v

const envSchema = z.object({
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),

  CLOUDFLARE_ACCOUNT_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  CLOUDFLARE_ACCESS_KEY_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  CLOUDFLARE_SECRET_ACCESS_KEY_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  CLOUDFLARE_BUCKET: z.preprocess(emptyToUndefined, z.string().optional()),
  CLOUDFLARE_PUBLIC_URL: z.preprocess(emptyToUndefined, z.string().url().optional()),
})
// ...existing code...
const parsed = envSchema.safeParse(process.env)
if (!parsed.success) {
  console.error('❌ Variáveis de ambiente inválidas', parsed.error.format())
  throw new Error('Variáveis de ambiente inválidas')
}
export const env = parsed.data
export type Env = typeof env