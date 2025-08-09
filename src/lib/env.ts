import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  SITE_URL: z.string().url().default('http://localhost:3000'),
  PORT: z.coerce.number().default(3000),
  
  // Analytics
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_PLAUSIBLE_API_HOST: z.string().url().optional(),
  
  // Error Monitoring
  SENTRY_DSN: z.string().optional(),
  SENTRY_ORG: z.string().optional(),
  SENTRY_PROJECT: z.string().optional(),
  
  // Form Integration
  N8N_WEBHOOK_URL: z.string().url().optional(),
  N8N_WEBHOOK_SECRET: z.string().optional(),
  
  // Email
  EMAIL_FROM: z.string().email().default('noreply@kaffeerad.berlin'),
  EMAIL_REPLY_TO: z.string().email().default('info@kaffeerad.berlin'),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data

// Type-safe environment variables
export type Env = z.infer<typeof envSchema>