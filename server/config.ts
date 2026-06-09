import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4001),
  DATABASE_URL: z
    .string()
    .trim()
    .min(1)
    .default("postgresql://morven_user:morven_password@localhost:5432/morven"),
  CORS_ORIGIN: z.string().trim().default("*"),
  ADMIN_API_KEY: z.string().trim().min(8).default("morven-admin-key"),
});

export const serverEnv = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  ADMIN_API_KEY: process.env.ADMIN_API_KEY,
});
